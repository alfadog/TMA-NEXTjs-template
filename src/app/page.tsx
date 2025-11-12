"use client";

import { Button, Section } from "@telegram-apps/telegram-ui";
import PlayerHeader from "../components/PlayerHeader";
import StatCard from "../components/StatCard";
import RecentResults from "../components/RecentResults";
import BottomBar from "../components/BottomBar";
import { useEffect } from "react";
import { useMainButton } from "@telegram-apps/sdk-react";
import Link from "next/link";

export default function HomePage() {
  // Telegram MainButton (нижняя нативная кнопка)
  const mainButton = useMainButton();

  useEffect(() => {
    mainButton.setText("Play: Memory Matrix");
    mainButton.show();
    mainButton.onClick(() => {
      window.location.href = "/memory";
    });
    return () => mainButton.hide();
  }, [mainButton]);

  const recent = [
    { date: "2025-11-11", score: 42, level: 7 },
    { date: "2025-11-10", score: 36, level: 6 },
  ];

  return (
    <div className="pb-24 px-3">
      <PlayerHeader name="Player" username="you" />

      <Section header="Stats">
        <div className="grid grid-cols-3 gap-3">
          <StatCard label="Level" value={7} />
          <StatCard label="Score" value={42} />
          <StatCard label="Streak" value={3} />
        </div>
      </Section>

      <Section header="Quick Start">
        <Link href="/memory">
          <Button size="l" stretched>
            Play Memory Matrix
          </Button>
        </Link>
      </Section>

      <RecentResults items={recent} />

      <BottomBar />
    </div>
  );
}
