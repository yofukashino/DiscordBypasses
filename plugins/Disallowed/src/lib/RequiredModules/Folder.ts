import { webpack } from "replugged";

import type Types from "@Types";

export type Folder = Types.DefaultTypes.RawModule<Record<string, () => Types.ReactTree>>;

export default await webpack
  .waitForModule<Folder>(webpack.filters.bySource(".folderIconWrapper"), {
    raw: true,
    timeout: 10000,
  })
  .then(({ exports }) => exports)
  .catch(() => {
    throw new Error("Failed To Find Folder Module");
  });
