import { util, webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default (): void => {
  const { FolderConstructor } = Modules;
  const loader = webpack.getFunctionKeyBySource(FolderConstructor, "folderNode:");
  PluginInjector.after(FolderConstructor, loader, (_args, res: React.ReactElement & Types.Tree) => {
    const IconWrapper = util.findInReactTree(
      res,
      (c: Types.ReactTree) =>
        c?.props?.className?.includes("folderButtonInner") && c?.props?.children,
    ) as React.ReactElement & Types.Tree;
    if (SettingValues.get("plainFolderIcon", defaultSettings.plainFolderIcon) && IconWrapper)
      IconWrapper.props.className = `legalDiscordBypasses-folderIcon ${IconWrapper.props.className}`;
    return res;
  });
};
