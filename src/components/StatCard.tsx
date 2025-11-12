"use client";
import { Card } from "@telegram-apps/telegram-ui";

type Props = { label: string; value: string | number };
export default function StatCard({ label, value }: Props) {
  return (
    <Card style={{ padding: 12 }}>
      <div className="text-xs opacity-70">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </Card>
  );
}
