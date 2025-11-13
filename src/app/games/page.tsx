'use client';

import { AppScaffold } from '@/components/layout/AppScaffold';
import { Link } from '@/components/Link/Link';
import { LinkTile } from '@/components/ui/LinkTile';

import styles from './games.module.css';

export default function GamesPage() {
  return (
    <AppScaffold active="games">
      <div className={styles.container}>
        <section className={styles.headerCard}>
          <h1 className={styles.headerTitle}>Daily Free Games</h1>
          <p className={styles.headerSubtitle}>
            Rotate through curated puzzles to boost flexibility, speed, memory, and focus.
          </p>
          <Link href="/events" className={styles.unlockButton}>
            See Featured Event
          </Link>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Collections</h2>
          <p className={styles.sectionDescription}>
            Explore themed playlists inspired by Match Masters boosters and cognitive drills.
          </p>
          <div className={styles.categoryGrid}>
            <LinkTile
              href="/games#flexibility"
              title="Ebb & Flow"
              subtitle="Rhythm-based flexibility challenges"
              accent="green"
            >
              🌊
            </LinkTile>
            <LinkTile
              href="/games#speed"
              title="Mind Sprint"
              subtitle="Reaction and speed duels"
              accent="blue"
            >
              ⚡️
            </LinkTile>
            <LinkTile
              href="/games#memory"
              title="Memory Match"
              subtitle="Grid combos with Match Masters boosts"
              accent="purple"
            >
              🧠
            </LinkTile>
            <LinkTile
              href="/games#attention"
              title="Focus Forge"
              subtitle="Precision tapping & pattern hunts"
              accent="orange"
            >
              🎯
            </LinkTile>
          </div>
        </section>

        <section id="flexibility">
          <h2 className={styles.sectionTitle}>Flexibility</h2>
          <p className={styles.sectionDescription}>
            Flow through multi-stage puzzles that remix mechanics mid-match.
          </p>
          <div className={styles.cardRow}>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>🔄</div>
              <h3 className={styles.gameTitle}>Shift Grid</h3>
              <p className={styles.gameMeta}>Remap colors while keeping combos alive</p>
            </div>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>🪄</div>
              <h3 className={styles.gameTitle}>Spell Swap</h3>
              <p className={styles.gameMeta}>Match gems to trigger power-ups in sequence</p>
            </div>
          </div>
        </section>

        <section id="speed">
          <h2 className={styles.sectionTitle}>Speed</h2>
          <p className={styles.sectionDescription}>
            Short bursts of intense competition with live timers and streak multipliers.
          </p>
          <div className={styles.cardRow}>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>🚀</div>
              <h3 className={styles.gameTitle}>Rocket Rush</h3>
              <p className={styles.gameMeta}>Score combos before the boosters overheat</p>
            </div>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>🎲</div>
              <h3 className={styles.gameTitle}>Match Blitz</h3>
              <p className={styles.gameMeta}>Classic 2-minute duel with random modifiers</p>
            </div>
          </div>
        </section>

        <section id="memory">
          <h2 className={styles.sectionTitle}>Memory</h2>
          <p className={styles.sectionDescription}>
            Strengthen recall through layered pairings and progressive decks.
          </p>
          <div className={styles.cardRow}>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>🧩</div>
              <h3 className={styles.gameTitle}>Memory Match</h3>
              <p className={styles.gameMeta}>Reveal and chain cards with booster assists</p>
            </div>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>💡</div>
              <h3 className={styles.gameTitle}>Recall Relay</h3>
              <p className={styles.gameMeta}>Team up for co-op memorization battles</p>
            </div>
          </div>
        </section>

        <section id="attention">
          <h2 className={styles.sectionTitle}>Attention</h2>
          <p className={styles.sectionDescription}>
            Dial in accuracy with distraction-heavy matches and streak protection.
          </p>
          <div className={styles.cardRow}>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>🎯</div>
              <h3 className={styles.gameTitle}>Focus Field</h3>
              <p className={styles.gameMeta}>Tap the highlighted tiles before they fade</p>
            </div>
            <div className={styles.gameCard}>
              <div className={styles.gameArtwork}>🛰️</div>
              <h3 className={styles.gameTitle}>Signal Scan</h3>
              <p className={styles.gameMeta}>Track frequencies while dodging decoys</p>
            </div>
          </div>
          <div className={styles.cardRow}>
            <div className={styles.unlockCard}>
              <h3 className={styles.unlockTitle}>Unlock 40+ Premium Games</h3>
              <p>
                Upgrade to Arcade Pass for unlimited boosters, exclusive arenas, and weekly boss
                fights inspired by Match Masters.
              </p>
              <Link href="/rewards" className={styles.unlockButton}>
                Get Premium
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppScaffold>
  );
}
