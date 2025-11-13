'use client';

import { type PropsWithChildren } from 'react';

import { Link } from '@/components/Link/Link';

import styles from './LinkTile.module.css';

interface LinkTileProps extends PropsWithChildren {
  href: string;
  title: string;
  subtitle?: string;
  accent?: 'purple' | 'blue' | 'green' | 'orange' | 'pink';
  badge?: string;
}

export function LinkTile({
  href,
  title,
  subtitle,
  accent = 'purple',
  badge,
  children,
}: LinkTileProps) {
  return (
    <Link href={href} className={`${styles.tile} ${styles[accent]}`}>
      <div className={styles.inner}>
        <div className={styles.texts}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{title}</h3>
            {badge ? <span className={styles.badge}>{badge}</span> : null}
          </div>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>
        {children ? <div className={styles.trailing}>{children}</div> : null}
      </div>
    </Link>
  );
}
