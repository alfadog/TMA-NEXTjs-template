"use client";
import { Header, Avatar, Button } from "@telegram-apps/telegram-ui";

type Props = { name: string; username?: string };
export default function PlayerHeader({ name, username }: Props) {
  return (
    <Header
      before={<Avatar size={40} fallback={name.slice(0, 1)} />}
      subtitle={username ? `@${username}` : undefined}
      after={<Button mode="bezeled">Settings</Button>}
    >
      {name}
    </Header>
  );
}
