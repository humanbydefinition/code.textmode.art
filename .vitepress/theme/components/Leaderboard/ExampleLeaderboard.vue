<template>
  <section class="example-leaderboard">
    <div class="example-leaderboard__stats">
      <UiCard rounded="md" padded>
        <p class="example-leaderboard__eyebrow">Examples</p>
        <p class="example-leaderboard__value">~{{ exampleLeaderboardStats.totalSketches }}</p>
        <p class="example-leaderboard__meta">
          Across all API documentation pages
        </p>
      </UiCard>

      <UiCard rounded="md" padded>
        <p class="example-leaderboard__eyebrow">Contributors</p>
        <p class="example-leaderboard__value">{{ exampleLeaderboardStats.totalContributors }} <span class="example-leaderboard__ai-hint">(+ 🤖)</span></p>
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
        <h2 class="example-leaderboard__callout-title">Discord role reward</h2>
        <p class="example-leaderboard__callout-desc">
          Reach <strong>{{ discordRoleReward.unlockCount }}</strong> accepted example sketches and you become eligible for the
          <code>{{ discordRoleReward.name }}</code> role in Discord.
          Ties are sorted alphabetically by contributor name.
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
                {{ entry.name }} <span v-if="entry.isBot">🤖</span>
              </a>
              <span v-else>{{ entry.name }} <span v-if="entry.isBot">🤖</span></span>
              <span v-if="entry.login" class="example-leaderboard__login">@{{ entry.login }}</span>
              <span v-if="entry.isBot" class="example-leaderboard__bot-taunt">Replace its sketches to knock it off the board</span>
            </div>
          </div>

          <UiBadge :variant="entry.hasUnlockedRole ? 'success' : 'warning'" pill>
            {{ entry.hasUnlockedRole ? 'Eligible now' : `${entry.sketchesUntilRole} remaining` }}
          </UiBadge>
        </div>

        <div class="example-leaderboard__mobile-progress">
          <div class="example-leaderboard__progress-header">
            <span class="example-leaderboard__progress-label">{{ entry.sketchCount }} / {{ discordRoleReward.unlockCount }} sketches</span>
            <span class="example-leaderboard__progress-pct">{{ entry.progressPercent }}%</span>
          </div>
          <div class="example-leaderboard__progress-track">
            <div
              class="example-leaderboard__progress-fill"
              :class="{ 'example-leaderboard__progress-fill--complete': entry.hasUnlockedRole }"
              :style="{ width: entry.progressPercent + '%' }"
            />
          </div>
        </div>

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
            <th>Contributed</th>
            <th>Progress</th>
            <th>Role status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in exampleLeaderboard" :key="entry.authorKey" :class="{ 'example-leaderboard__row--bot': entry.isBot }">
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
                    {{ entry.name }} <span v-if="entry.isBot">🤖</span>
                  </a>
                  <span v-else>{{ entry.name }} <span v-if="entry.isBot">🤖</span></span>
                  <span v-if="entry.login" class="example-leaderboard__login">@{{ entry.login }}</span>
                  <span v-if="entry.isBot" class="example-leaderboard__bot-taunt">Replace its sketches to knock it off the board</span>
                </div>
              </div>
            </td>
            <td class="example-leaderboard__count-cell">{{ entry.sketchCount }}</td>
            <td>
              <div class="example-leaderboard__progress-track example-leaderboard__progress-track--table">
                <div
                  class="example-leaderboard__progress-fill"
                  :class="{ 'example-leaderboard__progress-fill--complete': entry.hasUnlockedRole }"
                  :style="{ width: entry.progressPercent + '%' }"
                />
              </div>
            </td>
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

/* ─── Stats cards ─── */

.example-leaderboard__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.example-leaderboard__eyebrow,
.example-leaderboard__meta,
.example-leaderboard__login,
.example-leaderboard__titles {
  color: var(--vp-c-text-2);
}

.example-leaderboard__eyebrow {
  margin: 0 0 0.4rem;
  font-family: var(--textmode-font);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.example-leaderboard__value {
  margin: 0;
  font-family: var(--textmode-font);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: var(--vp-c-text-1);
}

.example-leaderboard__ai-hint {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
}

.example-leaderboard__meta {
  margin: 0.4rem 0 0;
  font-size: 0.875rem;
  line-height: 1.5;
}

/* ─── Discord callout ─── */

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

.example-leaderboard__callout-title {
  margin: 0 0 0.5rem;
  border: 0;
  padding: 0;
  font-size: 1.15rem;
}

.example-leaderboard__callout-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
}

.example-leaderboard__callout-desc code {
  font-family: var(--textmode-font);
  font-size: 0.8125rem;
}

.example-leaderboard__callout-action {
  flex-shrink: 0;
}

/* ─── Progress bar ─── */

.example-leaderboard__progress-track {
  width: 100%;
  height: 6px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  overflow: hidden;
}

.example-leaderboard__progress-track--table {
  min-width: 60px;
}

.example-leaderboard__progress-fill {
  height: 100%;
  border-radius: 3px;
  background: rgba(245, 158, 11, 0.6);
  transition: width 0.3s ease;
}

.example-leaderboard__progress-fill--complete {
  background: rgba(16, 185, 129, 0.7);
}

.example-leaderboard__progress-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.375rem;
}

.example-leaderboard__progress-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
}

.example-leaderboard__progress-pct {
  font-family: var(--textmode-font);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
}

/* ─── Table ─── */

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

.example-leaderboard__table-wrap :deep(tr) {
  transition: background 0.2s ease;
}

.example-leaderboard__table-wrap :deep(tbody tr:hover) {
  background: var(--vp-c-bg-soft);
}

.example-leaderboard__table-wrap :deep(th:nth-child(1)),
.example-leaderboard__table-wrap :deep(td:nth-child(1)) {
  width: 80px;
  white-space: nowrap;
}

.example-leaderboard__table-wrap :deep(th:nth-child(3)),
.example-leaderboard__table-wrap :deep(td:nth-child(3)) {
  width: 110px;
  white-space: nowrap;
}

.example-leaderboard__table-wrap :deep(th:nth-child(4)),
.example-leaderboard__table-wrap :deep(td:nth-child(4)) {
  width: 120px;
}

.example-leaderboard__table-wrap :deep(th:nth-child(5)),
.example-leaderboard__table-wrap :deep(td:nth-child(5)) {
  width: 160px;
  white-space: nowrap;
}

.example-leaderboard__count-cell {
  font-family: var(--textmode-font);
  font-weight: 600;
}

/* ─── Mobile list ─── */

.example-leaderboard__mobile-list {
  display: none;
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

.example-leaderboard__mobile-progress {
  margin: 0 0 0.85rem;
  color: var(--vp-c-text-2);
}

/* ─── Shared ─── */

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
  transition: color 0.2s ease;
}

.example-leaderboard__profile-link:hover {
  color: var(--vp-c-brand-1);
}

.example-leaderboard__login {
  font-size: 0.85rem;
}

.example-leaderboard__bot-taunt {
  font-size: 0.8rem;
  font-style: italic;
  color: var(--vp-c-text-3);
}

.example-leaderboard__titles {
  font-size: 0.85rem;
  line-height: 1.45;
}

.example-leaderboard__rank,
.example-leaderboard__rank-cell {
  font-family: var(--textmode-font);
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

/* ─── Responsive ─── */

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
