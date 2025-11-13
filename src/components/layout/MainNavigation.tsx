'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { Link } from '@/components/Link/Link';

import styles from './MainNavigation.module.css';
import type { NavKey } from './AppScaffold';

interface NavItem {
  key: NavKey;
  label: string;
  href: string;
  emoji: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: 'overview', label: 'Overview', href: '/', emoji: '🏠' },
  { key: 'games', label: 'Games', href: '/games', emoji: '🎮' },
  { key: 'stats', label: 'Stats', href: '/stats', emoji: '📊' },
  { key: 'hub', label: 'Hub', href: '/hub', emoji: '🧭' },
];

export function MainNavigation({ active }: { active: NavKey }) {
  const pathname = usePathname();

  const current = useMemo(() => {
    const match = NAV_ITEMS.find((item) => {
      if (item.href === '/') {
        return pathname === '/';
      }
      return pathname.startsWith(item.href);
    });

    return match?.key ?? active;
  }, [pathname, active]);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className={styles.link}
          aria-current={current === item.key ? 'page' : undefined}
        >
          <span className={styles.emoji}>{item.emoji}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
