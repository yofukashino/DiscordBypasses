import { webpack } from "replugged";

export type DownloadButtonType = React.ComponentType<
  Record<string, unknown> & {
    target?: string;
    rel?: string;
    style?: Record<string, string>;
    href?: string;
    mimeType?: string[];
  }
>;

export interface DownloadButton {
  Icon: DownloadButtonType;
}

const Icon = await webpack
  .waitForModule<DownloadButtonType>(webpack.filters.bySource(".MEDIA_DOWNLOAD_BUTTON_TAPPED,"), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find DownloadButton Module");
  });

export default { Icon };
