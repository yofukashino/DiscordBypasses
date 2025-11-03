import { webpack } from "replugged";

export interface PreloadedUserSettings {
  defaultCheckDepth: number;
  fields: unknown[];
  typeName: string;
  internalBinaryRead: (...args: unknown[]) => {
    appearance: { clientThemeSettings: Record<string, unknown> };
  };
}

const mod = await webpack
  .waitForModule<Record<string, PreloadedUserSettings>>(
    webpack.filters.bySource("PreloadedUserSettings"),
    {
      timeout: 10000,
    },
  )
  .catch(() => {
    throw new Error("Failed To Find PreloadedUserSettings Module");
  });

export default Object.values(mod).find((v) => v?.typeName?.endsWith?.("PreloadedUserSettings"));
