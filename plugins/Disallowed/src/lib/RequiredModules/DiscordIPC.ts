import { webpack } from "replugged";

export interface DiscordIPC {
  setSystemTrayIcon: (icon: "DEFAULT" | "UNREAD") => void;
  setBadge: (badge: number) => void;
}

export default await webpack
  .waitForProps<DiscordIPC>(["setBadge"], {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find Electron Module");
  });
