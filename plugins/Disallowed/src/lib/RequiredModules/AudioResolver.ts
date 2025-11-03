import { webpack } from "replugged";
import type Types from "@Types";

export type AudioResolver = Types.DefaultTypes.RawModule<(sound: string) => string>;

export default await webpack
  .waitForModule<AudioResolver>(webpack.filters.bySource("./mute.mp3"), {
    raw: true,
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find AudioResolver Module");
  });
