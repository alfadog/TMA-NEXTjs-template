'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';
import { Link } from '@/components/Link/Link';
import { LinkTile } from '@/components/ui/LinkTile';
import { StatBar } from '@/components/ui/StatBar';

import styles from './_assets/home.module.css';

export default function Home() {
  return (
    <AppScaffold active="overview">
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroHeading}>
          <div className={styles.profile}>
            <span className={styles.levelBadge}>Level 18 · Grand Master</span>
            <h1 className={styles.playerName}>NeuroArcade</h1>
            <p className={styles.streak}>7-day focus streak · 4 quests active</p>
          </div>
          <div className={styles.scoreCard}>
            <span>Mind Score</span>
            <strong>1,173</strong>
          </div>
        </div>
        <div className={styles.heroFooter}>
          <div className={styles.heroActions}>
            <Link href="/games" className={styles.heroButton}>
              Play Now
            </Link>
            <Link href="/events" className={styles.heroButton}>
              Join Event
            </Link>
          </div>
          <div className={styles.heroActions}>
            <Link href="/stats" className={styles.heroButton}>
              View Stats
            </Link>
            <Link href="/hub" className={styles.heroButton}>
              Rewards
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>Quick Destinations</h2>
          <p className={styles.sectionDescription}>
            Jump into daily challenges, track your cognition, or explore the league ladder.
          </p>
        </div>
        <div className={styles.quickGrid}>
          <LinkTile
            href="/games"
            title="Daily Mix"
            subtitle="Fresh puzzles for focus, memory, and reflexes"
            badge="New"
            accent="pink"
          >
            🎯
          </LinkTile>
          <LinkTile
            href="/stats"
            title="Brain Metrics"
            subtitle="Detailed LPI, streaks, and improvement curves"
            accent="blue"
          >
            📈
          </LinkTile>
          <LinkTile
            href="/league"
            title="Legends League"
            subtitle="Climb through Rookie to Grand Master tiers"
            accent="purple"
          >
            🏆
          </LinkTile>
          <LinkTile
            href="/rewards"
            title="Arcade Market"
            subtitle="Boosters, streak savers, and premium unlocks"
            accent="orange"
          >
            🎁
          </LinkTile>
          <LinkTile
            href="/teams"
            title="Brain Guilds"
            subtitle="Team up for tournaments & shared rewards"
            accent="green"
          >
            🤝
          </LinkTile>
          <LinkTile
            href="/events"
            title="Match Rumble"
            subtitle="Limited time co-op challenge—score big!"
            accent="pink"
          >
            ⚡️
          </LinkTile>
        </div>
      </section>

      <section className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>Cognitive Pulse</h2>
          <p className={styles.sectionDescription}>
            Track how your abilities evolve across speed, attention, and problem solving.
          </p>
        </div>
        <div className={styles.statList}>
          <StatBar label="Speed" value={920} tone="pink" />
          <StatBar label="Memory" value={962} tone="purple" />
          <StatBar label="Attention" value={1280} tone="teal" />
          <StatBar label="Flexibility" value={1260} tone="orange" />
          <StatBar label="Problem Solving" value={1296} tone="blue" />
          <StatBar label="Math" value={1368} tone="yellow" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.highlight}`}>
        <div>
          <h2 className={styles.highlightTitle}>Match Masters: Dustville Duel</h2>
          <p>
            Squad up in the neon arena, master boosters, and hit the highest combo before the
            timer runs out. Rewards include exclusive skins and 2x XP boosters.
          </p>
        </div>
        <div className={styles.highlightMeta}>
          <span>⏱ Ends in 6h 12m</span>
          <span>👥 Teams of 4</span>
          <span>🏅 Top prize: 720 trophies</span>
        </div>
        <Link href="/events" className={styles.heroButton}>
          View Event Details
        </Link>
      </section>
    </AppScaffold>
  );
}
