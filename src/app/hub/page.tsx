'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';
import { LinkTile } from '@/components/ui/LinkTile';

import styles from './hub.module.css';

export default function HubPage() {
  return (
    <AppScaffold active="hub">
      <div className={styles.container}>
        <section className={styles.banner}>
          <h1 className={styles.bannerTitle}>Arcade Hub</h1>
          <p>
            Manage rewards, compete in leagues, join brain guilds, and keep tabs on special
            Match Masters events—all from one command center.
          </p>
          <div className={styles.bannerRow}>
            <span className={styles.tag}>Daily Deals</span>
            <span className={styles.tag}>Legends League</span>
            <span className={styles.tag}>Guild Raids</span>
            <span className={styles.tag}>Events Feed</span>
          </div>
        </section>

        <section className={styles.grid}>
          <LinkTile
            href="/rewards"
            title="Daily Deals"
            subtitle="Shop boosters & streak savers"
            accent="orange"
          >
            🛒
          </LinkTile>
          <LinkTile
            href="/league"
            title="Legends Ladder"
            subtitle="Track trophy milestones"
            accent="purple"
          >
            🏆
          </LinkTile>
          <LinkTile
            href="/teams"
            title="Brain Guilds"
            subtitle="Coordinate co-op strategies"
            accent="green"
          >
            🤝
          </LinkTile>
          <LinkTile
            href="/events"
            title="Live Events"
            subtitle="Enter special tournaments"
            accent="blue"
          >
            🎉
          </LinkTile>
        </section>

        <section className={styles.secondary}>
          <h2>Next Steps</h2>
          <ul>
            <li>Complete 3 Match Blitz games to unlock Elite Rush tier.</li>
            <li>Invite teammates to activate the Guild XP multiplier.</li>
            <li>Check Arcade Market for rotating booster bundles.</li>
          </ul>
        </section>
      </div>
    </AppScaffold>
  );
}
