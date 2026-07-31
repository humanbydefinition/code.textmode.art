import contributionTypesCatalog from "../../data/contribution-types.json";
import contributorsRegistry from "../../data/contributors.json";

export interface ContributorLink {
  icon: string;
  link: string;
}

interface ContributionTypeDefinition {
  key: string;
  emoji: string;
  label: string;
  description: string;
}

interface ContributorRegistryEntry {
  login: string;
  name?: string;
  profileUrl?: string;
  avatarUrl?: string;
  contributions: string[];
  links?: Array<{
    icon: string;
    url: string;
  }>;
}

interface ContributorsRegistry {
  schemaVersion: 1;
  contributors: ContributorRegistryEntry[];
}

interface ContributionTypesCatalog {
  schemaVersion: 1;
  contributionTypes: ContributionTypeDefinition[];
}

const linkOrder = [
  "website",
  "github",
  "instagram",
  "twitter",
  "mastodon",
  "bluesky",
  "discord",
] as const;

interface Contribution {
  type: string;
  emoji: string;
  name: string;
  description: string;
}

export interface Contributor {
  login: string;
  name: string;
  avatar: string;
  profile: string;
  contributions: Contribution[];
  links: ContributorLink[];
}

const registry = contributorsRegistry as ContributorsRegistry;
const catalog = contributionTypesCatalog as ContributionTypesCatalog;
const contributionTypes = new Map(
  catalog.contributionTypes.map((contribution) => [
    contribution.key,
    contribution,
  ]),
);

function getProfile(entry: ContributorRegistryEntry): string {
  return entry.profileUrl ?? `https://github.com/${entry.login}`;
}

function getAvatar(entry: ContributorRegistryEntry): string {
  const url = new URL(
    entry.avatarUrl ?? `https://github.com/${entry.login}.png`,
  );
  url.searchParams.set("s", "160");
  return url.toString();
}

function getContribution(type: string): Contribution {
  const contribution = contributionTypes.get(type);

  if (!contribution) {
    throw new Error(`Unknown contributor type: ${type}`);
  }

  return {
    type,
    emoji: contribution.emoji,
    name: contribution.label,
    description: contribution.description,
  };
}

function getLinks(entry: ContributorRegistryEntry): ContributorLink[] {
  const links: ContributorLink[] = [
    { icon: "github", link: getProfile(entry) },
  ];

  for (const link of entry.links ?? []) {
    if (
      !links.some(
        (existing) => existing.icon === link.icon && existing.link === link.url,
      )
    ) {
      links.push({ icon: link.icon, link: link.url });
    }
  }

  return links.sort((left, right) => {
    const leftIndex = linkOrder.indexOf(
      left.icon as (typeof linkOrder)[number],
    );
    const rightIndex = linkOrder.indexOf(
      right.icon as (typeof linkOrder)[number],
    );

    const normalizedLeftIndex = leftIndex === -1 ? linkOrder.length : leftIndex;
    const normalizedRightIndex =
      rightIndex === -1 ? linkOrder.length : rightIndex;

    return normalizedLeftIndex - normalizedRightIndex;
  });
}

export const contributors: Contributor[] = registry.contributors.map(
  (entry) => ({
    login: entry.login,
    name: entry.name ?? entry.login,
    avatar: getAvatar(entry),
    profile: getProfile(entry),
    contributions: entry.contributions.map(getContribution),
    links: getLinks(entry),
  }),
);

export function findContributorByName(name: string): Contributor | null {
  return (
    contributors.find(
      (contributor) => contributor.name === name || contributor.login === name,
    ) ?? null
  );
}
