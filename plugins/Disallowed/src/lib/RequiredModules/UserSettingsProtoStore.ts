import type Types from "@Types";
import { webpack } from "replugged";

export interface UserSettingsProtoStore extends Types.Store {
  settings: {
    appearance: { clientThemeSettings: Record<string, unknown> };
  };
}

export default await webpack
  .waitForStore<UserSettingsProtoStore>("UserSettingsProtoStore", {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find UserSettingsProtoStore");
  });
