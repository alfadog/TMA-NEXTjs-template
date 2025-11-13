'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';

import styles from './teams.module.css';

export default function TeamsPage() {
  return (
    <AppScaffold active="hub">
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Brain Guilds</h1>
          <p>
            Team up with friends to trade stickers, unlock co-op challenges, and access exclusive
            tournaments inspired by Match Masters team events.
          </p>
        </section>

        <section className={styles.cardGrid}>
          <div className={styles.card}>
            <span className={styles.requirement}>Unlocks at 1,200 trophies</span>
            <h2>Guild Chat</h2>
            <p>Coordinate strategies and share booster loadouts instantly.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.requirement}>Live now</span>
            <h2>Sticker Trading</h2>
            <p>Complete your collection to claim animated Match Masters frames.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.requirement}>Weekend</span>
            <h2>Team Rumble</h2>
            <p>Compete in Dustville Duel with squad-wide trophy multipliers.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.requirement}>Premium</span>
            <h2>Guild Vault</h2>
            <p>Bank boosters and share them with teammates ahead of events.</p>
          </div>
        </section>

        <section className={styles.guildPerks}>
          <h2>Guild Perks</h2>
          <ul>
            <li>Daily co-op quests for shared XP and bonus crystals.</li>
            <li>Access to exclusive arena skins and celebratory effects.</li>
            <li>Seasonal guild rankings with trophy payouts.</li>
          </ul>
        </section>
      </div>
    </AppScaffold>
  );
}
