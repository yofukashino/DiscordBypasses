import { webpack } from "replugged";

export type SpotifyProtocoalUtils = Record<string, (...args: unknown[]) => void>;

export default await webpack
  .waitForModule<SpotifyProtocoalUtils>(webpack.filters.bySource('type:"SPOTIFY_PROFILE_UPDATE"'), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find SpotifyProtocalUtils Module");
  });
