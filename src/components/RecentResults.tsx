"use client";
import { Group, Cell } from "@telegram-apps/telegram-ui";

type Item = { date: string; score: number; level: number };
export default function RecentResults({ items }: { items: Item[] }) {
  return (
    <Group header="Recent">
      {items.map((it, i) => (
        <Cell key={i} subtitle={`Level ${it.level}`} after={`${it.score} pts`}>
          {it.date}
        </Cell>
      ))}
    </Group>
  );
}
