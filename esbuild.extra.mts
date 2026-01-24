import type { BuildOptions } from "esbuild";

export default (buildInfo: BuildOptions): BuildOptions => {
  return {
    ...buildInfo,
    preserveSymlinks: true,
  };
};
