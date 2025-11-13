'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';

import styles from './league.module.css';

export default function LeaguePage() {
  return (
    <AppScaffold active="hub">
      <div className={styles.container}>
        <section className={styles.banner}>
          <h1>Legends League Roadmap</h1>
          <p>
            Collect trophies across every game mode to climb from Rookie tiers to the coveted
            Legends League. Unlock skins, boosters, and premium currencies along the way.
          </p>
        </section>

        <section className={styles.timeline}>
          <div className={styles.milestone} data-tier="Rookie I">
            <h2 className={styles.milestoneTitle}>Rookie I · 0 → 1,000 trophies</h2>
            <p className={styles.milestoneMeta}>
              Practice arena. Earn basic boosters and unlock guild invites.
            </p>
            <div className={styles.rewardRow}>
              <span>🎯 Booster ×5</span>
              <span>💬 Sticker Pack</span>
            </div>
          </div>

          <div className={styles.milestone} data-tier="Veteran">
            <h2 className={styles.milestoneTitle}>Veteran II · 1,000 → 15,000 trophies</h2>
            <p className={styles.milestoneMeta}>
              Competitive ladder. Access to weekly tournaments and streak insurance.
            </p>
            <div className={styles.rewardRow}>
              <span>💎 Crystals ×30</span>
              <span>🛡️ Shield</span>
              <span>🎟️ Event Pass</span>
            </div>
          </div>

          <div className={styles.milestone} data-tier="Master">
            <h2 className={styles.milestoneTitle}>Grand Master III · 15,000 → 30,000 trophies</h2>
            <p className={styles.milestoneMeta}>
              High-stakes duels with Match Masters inspired visuals and effects.
            </p>
            <div className={styles.rewardRow}>
              <span>🏅 Golden Avatar</span>
              <span>🚀 Booster Bundle</span>
              <span>🎁 Premium Chest</span>
            </div>
          </div>

          <div className={`${styles.milestone} ${styles.legendBadge}`} data-tier="Legends">
            <h2 className={styles.milestoneTitle}>Legends League · 30,000+ trophies</h2>
            <p className={styles.milestoneMeta}>
              Seasonal finals. Earn exclusive auras, animated frames, and leaderboard badges.
            </p>
            <div className={styles.rewardRow}>
              <span>👑 Animated Frame</span>
              <span>🔥 Mythic Booster</span>
              <span>🏆 Title: Mind Champion</span>
            </div>
          </div>
        </section>
      </div>
    </AppScaffold>
  );
}
