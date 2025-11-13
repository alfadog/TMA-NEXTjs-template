'use client';

import styles from './StatBar.module.css';

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  tone?: 'teal' | 'purple' | 'orange' | 'pink' | 'yellow' | 'blue';
  suffix?: string;
  best?: number;
}

export function StatBar({
  label,
  value,
  max = 1600,
  tone = 'teal',
  suffix,
  best,
}: StatBarProps) {
  const percentage = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={`${styles.bar} ${styles[tone]}`}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>
          {value}
          {suffix ?? ''}
        </span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${percentage}%` }} />
        {best !== undefined ? (
          <span className={styles.best} style={{ left: `${Math.min(100, (best / max) * 100)}%` }}>
            best {best}
          </span>
        ) : null}
      </div>
    </div>
  );
}
