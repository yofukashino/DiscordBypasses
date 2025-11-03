import { webpack } from "replugged";

export interface VoiceMessage {
  $$typeof: "Symbol(react.memo)";
  compare: null;
  type: React.FC<{ mimeType: string[]; item: { downloadUrl: string }; fileName: string }>;
}

export default await webpack
  .waitForModule<React.MemoExoticComponent<React.FC<unknown>>>(
    webpack.filters.bySource("waveform,waveform"),
    {
      timeout: 10000,
    },
  )
  .catch(() => {
    throw new Error("Failed To Find VoiceMessage Module");
  });
