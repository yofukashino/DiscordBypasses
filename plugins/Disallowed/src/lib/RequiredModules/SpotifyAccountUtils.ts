import { webpack } from "replugged";

export type SpotifyAccountUtils = Record<
  string,
  (...args: unknown[]) => boolean | Promise<boolean> | unknown
>;
export default await webpack
  .waitForModule<SpotifyAccountUtils>(webpack.filters.bySource("spotify account is not premium"), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find SpotifyAccountUtils Module");
  });
