'use client';

import { type PropsWithChildren } from 'react';

import { Page } from '@/components/Page';

import { MainNavigation } from './MainNavigation';
import styles from './AppScaffold.module.css';

export type NavKey = 'overview' | 'games' | 'stats' | 'hub';

interface AppScaffoldProps extends PropsWithChildren {
  active: NavKey;
}

export function AppScaffold({ active, children }: AppScaffoldProps) {
  return (
    <Page back={false}>
      <div className={styles.shell}>
        <div className={styles.backdrop} />
        <div className={styles.wrapper}>
          <main className={styles.content}>{children}</main>
          <MainNavigation active={active} />
        </div>
      </div>
    </Page>
  );
}
