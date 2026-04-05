import sketchMetadata from '../../data/sketches.json'
import {
  findContributorByName,
  type Contributor,
  type ContributorLink,
} from './contributors'

interface SketchMeta {
  title: string
  author: string
  featured?: boolean
}

interface ExampleSketchContribution {
  id: string
  title: string
}

export interface DiscordRoleReward {
  name: string
  unlockCount: number
  inviteUrl: string
}

export interface ExampleLeaderboardEntry {
  rank: number
  authorKey: string
  name: string
  login: string | null
  avatar: string | null
  profile: string | null
  links: ContributorLink[]
  sketchCount: number
  progressPercent: number
  sketchesUntilRole: number
  hasUnlockedRole: boolean
  sketches: ExampleSketchContribution[]
}

export interface ExampleLeaderboardStats {
  totalSketches: number
  totalContributors: number
  roleEligibleContributors: number
}

type SketchMetadataMap = Record<string, SketchMeta>

const sketchEntries = Object.entries(sketchMetadata as SketchMetadataMap)
const excludedLeaderboardLogins = new Set(['humanbydefinition'])

export const discordRoleReward: DiscordRoleReward = {
  name: 'Textmodulator',
  unlockCount: 3,
  inviteUrl: 'https://discord.gg/sjrw8QXNks',
}

function getIdentity(author: string): Contributor | null {
  return findContributorByName(author)
}

function isExcludedFromLeaderboard(author: string): boolean {
  const contributor = getIdentity(author)
  const login = contributor?.login ?? author
  return excludedLeaderboardLogins.has(login.toLowerCase())
}

function getAvatar(contributor: Contributor | null): string | null {
  return contributor?.avatar ?? null
}

function getProfile(contributor: Contributor | null): string | null {
  return contributor?.profile ?? null
}

function createLeaderboardEntry(
  author: string,
  sketches: ExampleSketchContribution[],
): Omit<ExampleLeaderboardEntry, 'rank'> {
  const contributor = getIdentity(author)
  const sketchCount = sketches.length
  const authorKey = contributor?.login ?? author.toLowerCase()
  const sketchesUntilRole = Math.max(0, discordRoleReward.unlockCount - sketchCount)

  return {
    authorKey,
    name: contributor?.name ?? author,
    login: contributor?.login ?? null,
    avatar: getAvatar(contributor),
    profile: getProfile(contributor),
    links: contributor?.links ?? [],
    sketchCount,
    progressPercent: Math.min(100, Math.round((sketchCount / discordRoleReward.unlockCount) * 100)),
    sketchesUntilRole,
    hasUnlockedRole: sketchesUntilRole === 0,
    sketches: sketches.slice().sort((left, right) => left.title.localeCompare(right.title)),
  }
}

const groupedSketches = sketchEntries.reduce<Record<string, ExampleSketchContribution[]>>((groups, [id, meta]) => {
  const author = meta.author.trim()

  if (isExcludedFromLeaderboard(author)) {
    return groups
  }

  if (!groups[author]) {
    groups[author] = []
  }

  groups[author].push({
    id,
    title: meta.title,
  })

  return groups
}, {})

const sortedEntries = Object.entries(groupedSketches)
  .map(([author, sketches]) => createLeaderboardEntry(author, sketches))
  .sort((left, right) => {
    if (right.sketchCount !== left.sketchCount) {
      return right.sketchCount - left.sketchCount
    }

    return left.name.localeCompare(right.name)
  })

export const exampleLeaderboard: ExampleLeaderboardEntry[] = []

let previousRank = 0
let previousSketchCount = -1

for (const [index, entry] of sortedEntries.entries()) {
  const hasSameScore =
    index > 0
    && previousSketchCount === entry.sketchCount

  const rank = hasSameScore ? previousRank : index + 1

  exampleLeaderboard.push({
    ...entry,
    rank,
  })

  previousRank = rank
  previousSketchCount = entry.sketchCount
}

export const exampleLeaderboardStats: ExampleLeaderboardStats = {
  totalSketches: sketchEntries.length,
  totalContributors: exampleLeaderboard.length,
  roleEligibleContributors: exampleLeaderboard.filter(entry => entry.hasUnlockedRole).length,
}
