'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';
import { LinkTile } from '@/components/ui/LinkTile';
import { StatBar } from '@/components/ui/StatBar';

import styles from './stats.module.css';

export default function StatsPage() {
  return (
    <AppScaffold active="stats">
      <div className={styles.container}>
        <section className={styles.header}>
          <h1 className={styles.headerTitle}>Cognitive LPI Overview</h1>
          <div className={styles.headerMeta}>
            <span>Season 04</span>
            <span>Updated 12m ago</span>
            <span>Focus streak ×3</span>
          </div>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Ability Breakdown</h2>
          <StatBar label="Speed" value={920} best={1502} tone="pink" />
          <StatBar label="Memory" value={962} best={1502} tone="purple" />
          <StatBar label="Attention" value={1280} best={1502} tone="teal" />
          <StatBar label="Flexibility" value={1260} best={1502} tone="orange" />
          <StatBar label="Problem Solving" value={1296} best={1502} tone="blue" />
          <StatBar label="Math" value={1368} best={1502} tone="yellow" />
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Insights</h2>
          <div className={styles.trendList}>
            <div className={styles.trendItem}>
              <span>Speed improved after Match Blitz sessions</span>
              <strong>+12%</strong>
            </div>
            <div className={styles.trendItem}>
              <span>Memory streak maintained with Recall Relay co-op</span>
              <strong>5 days</strong>
            </div>
            <div className={styles.trendItem}>
              <span>Attention dip recovered using Focus Field boosters</span>
              <strong>+8%</strong>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.leagueCTA}`}>
          <h2 className={styles.cardTitle}>Climb the League</h2>
          <p>
            Earn trophies across all games to unlock the Legends League. Each rank milestone grants
            premium boosters and exclusive Match Masters cosmetics.
          </p>
          <div className={styles.linkRow}>
            <LinkTile
              href="/league"
              title="Road to Grand Master"
              subtitle="Track your current trophy ladder"
              accent="purple"
            >
              🏆
            </LinkTile>
            <LinkTile
              href="/rewards"
              title="Season Pass"
              subtitle="Unlock XP multipliers and bonus quests"
              accent="pink"
            >
              🎟️
            </LinkTile>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.tag}>Weekly Tournament</span>
            <span className={styles.tag}>Brains vs Time</span>
            <span className={styles.tag}>Focus Lab</span>
          </div>
        </section>
      </div>
    </AppScaffold>
  );
}
