import { components, i18n } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
export default (): void => {
  const { Tooltip } = components;
  const { DownloadButton, VoiceMessage } = Modules;
  PluginInjector.after(
    VoiceMessage,
    "type",
    (
      [{ item, mimeType }]: [{ mimeType: string[]; item: { downloadUrl: string } }],
      res: React.ReactElement,
    ) => {
      if (!SettingValues.get("voiceMessage", defaultSettings.voiceMessage)) return res;

      res?.props?.children?.splice?.(
        -1,
        0,
        <Tooltip text={i18n.Messages.DOWNLOAD}>
          {(props) => (
            <DownloadButton
              {...props}
              target="_blank"
              rel="noreferrer noopener"
              style={{ paddingLeft: "10px", color: "var(--interactive-normal)" }}
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
