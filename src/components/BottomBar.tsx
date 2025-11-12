"use client";
import { Tabbar, TabbarItem } from "@telegram-apps/telegram-ui";
import { useRouter, usePathname } from "next/navigation";

export default function BottomBar() {
  const r = useRouter();
  const path = usePathname();
  return (
    <Tabbar>
      <TabbarItem selected={path === "/"} onClick={() => r.push("/")}>
        Games
      </TabbarItem>
      <TabbarItem selected={path === "/profile"} onClick={() => r.push("/profile")}>
        Profile
      </TabbarItem>
      <TabbarItem selected={path === "/leaderboard"} onClick={() => r.push("/leaderboard")}>
        Top
      </TabbarItem>
    </Tabbar>
  );
}
