<template>
  <section class="example-leaderboard">
    <div class="example-leaderboard__stats">
      <UiCard rounded="md" padded>
        <p class="example-leaderboard__eyebrow">Accepted examples</p>
        <p class="example-leaderboard__value">{{ exampleLeaderboardStats.totalSketches }}</p>
        <p class="example-leaderboard__meta">
          {{ exampleLeaderboardStats.totalFeaturedSketches }} featured across the docs
        </p>
      </UiCard>

      <UiCard rounded="md" padded>
        <p class="example-leaderboard__eyebrow">Contributors ranked</p>
        <p class="example-leaderboard__value">{{ exampleLeaderboardStats.totalContributors }}</p>
        <p class="example-leaderboard__meta">Ranked by merged example sketch count</p>
      </UiCard>

      <UiCard rounded="md" padded>
        <p class="example-leaderboard__eyebrow">Discord unlock</p>
        <p class="example-leaderboard__value">{{ discordRoleReward.unlockCount }}</p>
        <p class="example-leaderboard__meta">
          {{ exampleLeaderboardStats.roleEligibleContributors }} contributor<span v-if="exampleLeaderboardStats.roleEligibleContributors !== 1">s</span>
          currently eligible
        </p>
      </UiCard>
    </div>

    <UiCard rounded="md" padded class="example-leaderboard__callout">
      <div class="example-leaderboard__callout-copy">
        <h2 class="example-leaderboard__title">Discord role reward</h2>
        <p class="example-leaderboard__body">
          Reach <strong>{{ discordRoleReward.unlockCount }}</strong> accepted example sketches and you become eligible for the
          <code>{{ discordRoleReward.name }}</code> role in Discord.
        </p>
        <p class="example-leaderboard__meta">
          Ties are sorted by featured examples, then alphabetically by contributor name.
        </p>
      </div>

      <UiButton
        href="https://discord.gg/sjrw8QXNks"
        external
        variant="secondary"
        class="example-leaderboard__callout-action"
      >
        <UiIcon name="ic:baseline-discord" size="sm" />
        Join Discord
      </UiButton>
    </UiCard>

    <div class="example-leaderboard__mobile-list">
      <UiCard
        v-for="entry in exampleLeaderboard"
        :key="entry.authorKey"
        rounded="md"
        padded
        class="example-leaderboard__mobile-card"
      >
        <div class="example-leaderboard__mobile-header">
          <div class="example-leaderboard__person">
            <span class="example-leaderboard__rank">#{{ entry.rank }}</span>
            <UiAvatar
              :src="entry.avatar ?? undefined"
              :alt="entry.name"
              :fallback="entry.name"
              size="md"
            />
            <div class="example-leaderboard__person-copy">
              <a
                v-if="entry.profile"
                :href="entry.profile"
                target="_blank"
                rel="noopener noreferrer"
                class="example-leaderboard__profile-link"
              >
                {{ entry.name }}
              </a>
              <span v-else>{{ entry.name }}</span>
              <span v-if="entry.login" class="example-leaderboard__login">@{{ entry.login }}</span>
            </div>
          </div>

          <UiBadge :variant="entry.hasUnlockedRole ? 'success' : 'warning'" pill>
            {{ entry.hasUnlockedRole ? 'Eligible now' : `${entry.sketchesUntilRole} remaining` }}
          </UiBadge>
        </div>

        <dl class="example-leaderboard__mobile-stats">
          <div>
            <dt>Accepted</dt>
            <dd>{{ entry.sketchCount }}</dd>
          </div>
          <div>
            <dt>Featured</dt>
            <dd>{{ entry.featuredCount }}</dd>
          </div>
        </dl>

        <p class="example-leaderboard__titles">
          {{ formatTitles(entry.sketches.map(sketch => sketch.title)) }}
        </p>
      </UiCard>
    </div>

    <div class="example-leaderboard__table-wrap">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Contributor</th>
            <th>Accepted</th>
            <th>Featured</th>
            <th>Role status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in exampleLeaderboard" :key="entry.authorKey">
            <td class="example-leaderboard__rank-cell">#{{ entry.rank }}</td>
            <td>
              <div class="example-leaderboard__person">
                <UiAvatar
                  :src="entry.avatar ?? undefined"
                  :alt="entry.name"
                  :fallback="entry.name"
                  size="md"
                />
                <div class="example-leaderboard__person-copy">
                  <a
                    v-if="entry.profile"
                    :href="entry.profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="example-leaderboard__profile-link"
                  >
                    {{ entry.name }}
                  </a>
                  <span v-else>{{ entry.name }}</span>
                  <span v-if="entry.login" class="example-leaderboard__login">@{{ entry.login }}</span>
                </div>
              </div>
            </td>
            <td>{{ entry.sketchCount }}</td>
            <td>{{ entry.featuredCount }}</td>
            <td>
              <UiBadge :variant="entry.hasUnlockedRole ? 'success' : 'warning'" pill>
                {{ entry.hasUnlockedRole ? 'Eligible now' : `${entry.sketchesUntilRole} remaining` }}
              </UiBadge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  discordRoleReward,
  exampleLeaderboard,
  exampleLeaderboardStats,
} from '../../composables/exampleLeaderboard'
import { UiAvatar, UiBadge, UiButton, UiCard, UiIcon } from '../ui'

defineOptions({ name: 'ExampleLeaderboard' })

function formatTitles(titles: string[]): string {
  if (titles.length <= 2) {
    return titles.join(' · ')
  }

  const [first, second] = titles
  return `${first} · ${second} · +${titles.length - 2} more`
}
</script>

<style scoped>
.example-leaderboard {
  margin: 2rem 0;
}

.example-leaderboard__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.example-leaderboard__eyebrow,
.example-leaderboard__meta,
.example-leaderboard__login,
.example-leaderboard__titles,
.example-leaderboard__mobile-stats dt {
  color: var(--vp-c-text-2);
}

.example-leaderboard__eyebrow {
  margin: 0 0 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.example-leaderboard__value {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: var(--vp-c-text-1);
}

.example-leaderboard__meta {
  margin: 0.4rem 0 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.example-leaderboard__callout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.example-leaderboard__callout-copy {
  min-width: 0;
}

.example-leaderboard__title {
  margin: 0 0 0.5rem;
  border: 0;
  padding: 0;
  font-size: 1.15rem;
}

.example-leaderboard__body {
  margin: 0 0 0.35rem;
}

.example-leaderboard__callout-action {
  flex-shrink: 0;
}

.example-leaderboard__table-wrap {
  display: block;
  width: 100%;
  overflow-x: auto;
}

.example-leaderboard__table-wrap :deep(table) {
  display: table;
  width: 100%;
  margin: 0;
  table-layout: fixed;
}

.example-leaderboard__table-wrap :deep(th),
.example-leaderboard__table-wrap :deep(td) {
  vertical-align: middle;
}

.example-leaderboard__table-wrap :deep(th:nth-child(1)),
.example-leaderboard__table-wrap :deep(td:nth-child(1)) {
  width: 88px;
  white-space: nowrap;
}

.example-leaderboard__table-wrap :deep(th:nth-child(3)),
.example-leaderboard__table-wrap :deep(td:nth-child(3)),
.example-leaderboard__table-wrap :deep(th:nth-child(4)),
.example-leaderboard__table-wrap :deep(td:nth-child(4)) {
  width: 96px;
  white-space: nowrap;
}

.example-leaderboard__table-wrap :deep(th:nth-child(5)),
.example-leaderboard__table-wrap :deep(td:nth-child(5)) {
  width: 180px;
  white-space: nowrap;
}

.example-leaderboard__mobile-list {
  display: none;
}

.example-leaderboard__person {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.example-leaderboard__person-copy {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.example-leaderboard__profile-link {
  color: var(--vp-c-text-1);
  font-weight: 600;
  text-decoration: none;
}

.example-leaderboard__profile-link:hover {
  color: var(--vp-c-brand-1);
}

.example-leaderboard__login,
.example-leaderboard__titles {
  font-size: 0.85rem;
}

.example-leaderboard__titles {
  line-height: 1.45;
}

.example-leaderboard__rank,
.example-leaderboard__rank-cell {
  font-family: var(--textmode-font);
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.example-leaderboard__mobile-card + .example-leaderboard__mobile-card {
  margin-top: 0.75rem;
}

.example-leaderboard__mobile-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.example-leaderboard__mobile-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0 0 0.85rem;
}

.example-leaderboard__mobile-stats div {
  padding: 0.75rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.example-leaderboard__mobile-stats dt,
.example-leaderboard__mobile-stats dd {
  margin: 0;
}

.example-leaderboard__mobile-stats dd {
  margin-top: 0.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

@media (max-width: 960px) {
  .example-leaderboard__stats {
    grid-template-columns: 1fr;
  }

  .example-leaderboard__callout {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 720px) {
  .example-leaderboard__table-wrap {
    display: none;
  }

  .example-leaderboard__mobile-list {
    display: block;
  }
}
</style>
