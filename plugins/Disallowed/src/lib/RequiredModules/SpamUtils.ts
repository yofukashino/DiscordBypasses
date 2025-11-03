import { webpack } from "replugged";

export type SpamUtils = Record<string, (...args: unknown[]) => boolean>;

export default await webpack
  .waitForModule<SpamUtils>(webpack.filters.bySource(/return .\(.\.author\.id\)/), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find SpamUtils Module");
  });
