import { util, webpack } from "replugged";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { Folder } from "@lib/RequiredModules";
import Types from "@Types";

const loader = webpack.getFunctionKeyBySource(Folder, "folderNode:");

PluginInjector.after(Folder, loader, (_args, res) => {
  if (!SettingValues.get("plainFolderIcon", DefaultSettings.plainFolderIcon)) return res;

  const IconWrapper = util.findInReactTree(
    res,
    (c: Types.ReactTree) =>
      c?.props?.className?.includes("folderButtonInner") && c?.props?.children,
  ) as Types.ReactTree;

  if (IconWrapper)
    IconWrapper.props.className = `legalDiscordBypasses-folderIcon ${IconWrapper.props.className}`;
  return res;
});
