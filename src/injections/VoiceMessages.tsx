import { webpack } from "replugged";
import { components, i18n } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default (): void => {
  const Tooltip = webpack.getFunctionBySource<Types.Tooltip>(components, "shouldShowTooltip");
  const { DownloadButton, VoiceMessage } = Modules;
  PluginInjector.after(
    VoiceMessage,
    "type",
    (
      [{ item, mimeType, fileName }]: [
        { mimeType: string[]; item: { downloadUrl: string }; fileName: string },
      ],
      res: React.ReactElement,
    ) => {
      if (!SettingValues.get("voiceMessage", defaultSettings.voiceMessage)) return res;
      res?.props?.children?.splice?.(
        -1,
        0,
        <Tooltip text={i18n.intl.formatToPlainString(i18n.t.DOWNLOAD)}>
          {(props) => (
            <DownloadButton
              {...props}
              target="_blank"
              rel="noreferrer noopener"
              style={{ paddingLeft: "10px", color: "var(--interactive-normal)" }}
              download={fileName}
              href={item?.downloadUrl}
              mimeType={mimeType}
            />
          )}
        </Tooltip>,
      );
      res?.props?.children?.shift();
      return res;
    },
  );
};
