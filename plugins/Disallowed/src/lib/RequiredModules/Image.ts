import type Types from "@Types";
import { webpack } from "replugged";

export interface Image {
  Input: React.ComponentClass<{ onChange: (...args: unknown[]) => void }>;
}

const mod = await webpack
  .waitForModule<Types.DefaultTypes.ModuleExports>(
    webpack.filters.bySource("maxFileSizeBytes:1/0"),
    {
      timeout: 10000,
    },
  )
  .catch(() => {
    throw new Error("Failed To Find ImageInput Module");
  });

export default {
  Input: webpack.getFunctionBySource<Image["Input"]>(mod ?? {}, "this.handleFileChange"),
};
