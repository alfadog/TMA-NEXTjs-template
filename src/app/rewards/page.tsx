'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';
import { Link } from '@/components/Link/Link';

import styles from './rewards.module.css';

export default function RewardsPage() {
  return (
    <AppScaffold active="hub">
      <div className={styles.container}>
        <section className={styles.banner}>
          <h1>Daily Deals & Boosters</h1>
          <p>Limited-time offers refresh every 12 hours. Grab boosters to amplify your streak.</p>
        </section>

        <section className={styles.dealGrid}>
          <div className={`${styles.dealCard} ${styles.bundle}`}>
            <span className={styles.timer}>NEW DEAL IN · 23h 57m</span>
            <h2 className={styles.dealTitle}>Today&apos;s Bundle</h2>
            <p className={styles.dealPrice}>THB 50.00</p>
            <p>Includes 2x boosters, 1 streak saver, 200 coins, and 75 trophies.</p>
            <Link href="/events" className={styles.cta}>
              View Event Boosts
            </Link>
          </div>

          <div className={`${styles.dealCard} ${styles.free}`}>
            <span className={styles.dealTitle}>Free Reward</span>
            <p className={styles.dealPrice}>🎁 Spin</p>
            <p>Check in to claim a surprise booster.</p>
            <span className={styles.cta}>Claim</span>
          </div>

          <div className={styles.dealCard}>
            <span className={styles.dealTitle}>Booster Pack</span>
            <p className={styles.dealPrice}>THB 30</p>
            <p>Unlock 3 rainbow rockets + 1 double score.</p>
            <span className={styles.cta}>Buy</span>
          </div>

          <div className={styles.dealCard}>
            <span className={styles.dealTitle}>Invite Friends</span>
            <p className={styles.dealPrice}>+300 ⚡</p>
            <p>Play with friends to earn bonus energy.</p>
            <span className={styles.cta}>Invite</span>
          </div>
        </section>
      </div>
    </AppScaffold>
  );
}
