import { i18n } from "replugged/common";
import { Tooltip } from "replugged/components";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { DownloadButton, VoiceMessage } from "@lib/RequiredModules";

PluginInjector.after(
  VoiceMessage,
  "type",
  ([{ item, mimeType, fileName }], res: React.ReactElement) => {
    if (!SettingValues.get("voiceMessage", DefaultSettings.voiceMessage)) return res;

    res?.props?.children?.splice?.(
      -1,
      0,
      <Tooltip text={i18n.intl.formatToPlainString(i18n.t.DOWNLOAD)}>
        <DownloadButton.Icon
          target="_blank"
          rel="noreferrer noopener"
          style={{ paddingLeft: "10px", color: "var(--interactive-normal)" }}
          download={fileName}
          href={item?.downloadUrl}
          mimeType={mimeType}
        />
      </Tooltip>,
    );
    res?.props?.children?.shift();

    return res;
  },
);
