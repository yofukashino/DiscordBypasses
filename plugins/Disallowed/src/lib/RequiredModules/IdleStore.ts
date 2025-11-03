import type Types from "@Types";
import { webpack } from "replugged";

export interface IdleStore extends Types.Store {
  getIdleSince: (...args: unknown[]) => number | null;
  isAFK: (...args: unknown[]) => boolean;
  isIdle: (...args: unknown[]) => boolean;
}

export default await webpack
  .waitForStore<IdleStore>("IdleStore", {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find IdleStore");
  });
