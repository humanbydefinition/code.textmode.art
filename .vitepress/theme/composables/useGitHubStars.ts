import { ref, onMounted, watch } from 'vue'

const CACHE_KEY_PREFIX = 'textmode_gh_stars_'
const CACHE_DURATION = 1000 * 60 * 60 // 1 hour

interface GitHubRepoData {
    stargazers_count: number
}

interface CacheEntry {
    timestamp: number
    data: number
}

export function useGitHubStars(user: string, repo: string) {
    const stars = ref<number | null>(null)
    const loading = ref(false)
    const error = ref<any>(null)

    const fetchStars = async () => {
        if (!user || !repo) return

        const cacheKey = `${CACHE_KEY_PREFIX}${user}/${repo}`

        // Check cache
        try {
            const cached = sessionStorage.getItem(cacheKey)
            if (cached) {
                const parsed = JSON.parse(cached) as CacheEntry
                if (Date.now() - parsed.timestamp < CACHE_DURATION) {
                    stars.value = parsed.data
                    return
                }
            }
        } catch (e) {
            // Ignore cache errors
        }

        loading.value = true
        error.value = null

        try {
            const response = await fetch(`https://api.github.com/repos/${user}/${repo}`)
            if (!response.ok) throw new Error('Failed to fetch stars')

            const data: GitHubRepoData = await response.json()
            stars.value = data.stargazers_count

            // Update cache
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify({
                    timestamp: Date.now(),
                    data: stars.value
                }))
            } catch (e) {
                // Ignore storage errors
            }
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }

    onMounted(fetchStars)

    // Refetch if props change (though typically won't for a static card)
    watch(() => [user, repo], fetchStars)

    return {
        stars,
        loading,
        error
    }
}
