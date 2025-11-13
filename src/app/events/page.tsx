'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';
import { Link } from '@/components/Link/Link';

import styles from './events.module.css';

export default function EventsPage() {
  return (
    <AppScaffold active="hub">
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Match Rumble · Dustville Duel</h1>
          <p>
            Squad up in teams of four and take on rotating boss modifiers. Complete phases to earn
            XP boosts and limited cosmetics.
          </p>
          <div className={styles.heroMeta}>
            <span>⏱ Ends in 7h 16m</span>
            <span>👥 4-Player Co-op</span>
            <span>🏆 720 Trophy Grand Prize</span>
          </div>
        </section>

        <section className={styles.card}>
          <h2>Event Checklist</h2>
          <ul className={styles.list}>
            <li>Complete 3 warm-up runs in Match Blitz to unlock the arena.</li>
            <li>Activate at least one booster from the Arcade Market for bonus rewards.</li>
            <li>Coordinate with your Brain Guild to split puzzle roles.</li>
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Reward Track</h2>
          <div className={styles.prizeRow}>
            <span>🎁 Event Chest</span>
            <span>🏅 Exclusive Avatar</span>
            <span>💎 50 Crystals</span>
            <span>🔥 Mythic Booster</span>
          </div>
        </section>

        <section className={styles.ctaRow}>
          <Link href="/games" className={styles.cta}>
            Practice Modes
          </Link>
          <Link href="/teams" className={styles.cta}>
            Invite Guild
          </Link>
          <Link href="/rewards" className={styles.cta}>
            Stock Boosters
          </Link>
        </section>
      </div>
    </AppScaffold>
  );
}
