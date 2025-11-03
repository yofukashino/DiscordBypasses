import { webpack } from "replugged";

export type MultiAccountConstants = Record<string, number | string>;

export default await webpack
  .waitForModule<MultiAccountConstants>(webpack.filters.bySource("multiaccount_cta_tooltip_seen"), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find AccountSwitcherStrings Module");
  });
