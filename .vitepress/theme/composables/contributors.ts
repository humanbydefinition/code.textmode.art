import allContributorsRaw from '../../../.all-contributorsrc?raw'
import contributorMetadataRaw from '../../data/contributors.json?raw'

export interface ContributorLink {
  icon: string
  link: string
}

interface AllContributorsEntry {
  login: string
  name: string
  avatar_url: string
  profile: string
  contributions: string[]
}

interface AllContributorsConfig {
  contributors: AllContributorsEntry[]
}

interface ContributorMetadataEntry {
  links?: ContributorLink[]
}

type ContributorMetadata = Record<string, ContributorMetadataEntry>

const linkOrder = ['website', 'github', 'instagram', 'twitter', 'mastodon', 'bluesky', 'discord'] as const

interface Contribution {
  type: string
  emoji: string
  name: string
  description: string
}

export interface Contributor {
  login: string
  name: string
  avatar: string
  profile: string
  contributions: Contribution[]
  links: ContributorLink[]
}

const contributionTypeMap: Record<string, Omit<Contribution, 'type'>> = {
  audio: { emoji: '🔊', name: 'Audio', description: 'Podcasts, background music, sound effects' },
  a11y: { emoji: '♿️', name: 'Accessibility', description: 'Accessibility improvements or audits' },
  bug: { emoji: '🐛', name: 'Bug Reports', description: 'Reporting issues' },
  blog: { emoji: '📝', name: 'Blogposts', description: 'Writing blog posts about the project' },
  business: { emoji: '💼', name: 'Business Development', description: 'Business strategy or partnerships' },
  code: { emoji: '💻', name: 'Code', description: 'Commits and pull requests' },
  content: { emoji: '🖋', name: 'Content', description: 'Website copy or written material' },
  data: { emoji: '🔣', name: 'Data', description: 'Contributed datasets or test data' },
  doc: { emoji: '📖', name: 'Documentation', description: 'README, Wiki, API docs' },
  design: { emoji: '🎨', name: 'Design', description: 'UI/UX, branding, visuals' },
  example: { emoji: '💡', name: 'Examples', description: 'Usage examples' },
  eventOrganizing: { emoji: '📋', name: 'Event Organizing', description: 'Organizing project events' },
  financial: { emoji: '💵', name: 'Financial Support', description: 'Funding or donations' },
  fundingFinding: { emoji: '🔍', name: 'Funding/Grant Finding', description: 'Identifying funding sources' },
  ideas: { emoji: '🤔', name: 'Ideas & Planning', description: 'Feature proposals' },
  infra: { emoji: '🚇', name: 'Infrastructure', description: 'CI, hosting, build systems' },
  maintenance: { emoji: '🚧', name: 'Maintenance', description: 'Refactoring, upkeep' },
  mentoring: { emoji: '🧑‍🏫', name: 'Mentoring', description: 'Supporting contributors' },
  platform: { emoji: '📦', name: 'Packaging', description: 'Porting to new platforms' },
  plugin: { emoji: '🔌', name: 'Plugin/Utility Libraries', description: 'Plugin development' },
  projectManagement: { emoji: '📆', name: 'Project Management', description: 'Planning and coordination' },
  promotion: { emoji: '📣', name: 'Promotion', description: 'Social sharing' },
  question: { emoji: '💬', name: 'Answering Questions', description: 'Community support' },
  research: { emoji: '🔬', name: 'Research', description: 'Literature reviews' },
  review: { emoji: '👀', name: 'Code Review', description: 'Reviewing pull requests' },
  security: { emoji: '🛡️', name: 'Security', description: 'Privacy and security improvements' },
  tool: { emoji: '🔧', name: 'Tools', description: 'Tooling contributions' },
  translation: { emoji: '🌍', name: 'Translation', description: 'Language translations' },
  test: { emoji: '⚠️', name: 'Tests', description: 'Writing test cases' },
  tutorial: { emoji: '✅', name: 'Tutorials', description: 'Educational content' },
  talk: { emoji: '📢', name: 'Talks', description: 'Presentations and talks' },
  userTesting: { emoji: '📓', name: 'User Testing', description: 'Conducting user testing' },
  video: { emoji: '📹', name: 'Videos', description: 'Creating video content' },
}

const allContributors = JSON.parse(allContributorsRaw) as AllContributorsConfig
const contributorMetadata = JSON.parse(contributorMetadataRaw) as ContributorMetadata

function getContribution(type: string): Contribution {
  const contribution = contributionTypeMap[type]

  if (!contribution) {
    return {
      type,
      emoji: '✨',
      name: type,
      description: 'Community contribution',
    }
  }

  return {
    type,
    ...contribution,
  }
}

function getLinks(entry: AllContributorsEntry, metadata: ContributorMetadataEntry | undefined): ContributorLink[] {
  const links: ContributorLink[] = [{ icon: 'github', link: entry.profile }]

  for (const link of metadata?.links ?? []) {
    if (!links.some(existing => existing.icon === link.icon && existing.link === link.link)) {
      links.push(link)
    }
  }

  return links.sort((left, right) => {
    const leftIndex = linkOrder.indexOf(left.icon as (typeof linkOrder)[number])
    const rightIndex = linkOrder.indexOf(right.icon as (typeof linkOrder)[number])

    const normalizedLeftIndex = leftIndex === -1 ? linkOrder.length : leftIndex
    const normalizedRightIndex = rightIndex === -1 ? linkOrder.length : rightIndex

    return normalizedLeftIndex - normalizedRightIndex
  })
}

export const contributors: Contributor[] = allContributors.contributors.map((entry) => ({
  login: entry.login,
  name: entry.name,
  avatar: `${entry.avatar_url}?s=160`,
  profile: entry.profile,
  contributions: entry.contributions.map(getContribution),
  links: getLinks(entry, contributorMetadata[entry.login]),
}))

export function findContributorByName(name: string): Contributor | null {
  return contributors.find(
    contributor => contributor.name === name || contributor.login === name,
  ) ?? null
}
