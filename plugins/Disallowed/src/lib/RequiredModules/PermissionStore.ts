import type Types from "@Types";
import { webpack } from "replugged";

export interface PermissionStore extends Types.Store {
  can: (permission: bigint) => boolean;
}

export default await webpack
  .waitForStore<PermissionStore>("PermissionStore", {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find PermissionStore");
  });
