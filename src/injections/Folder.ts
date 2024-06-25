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
      (c) =>
        c?.props &&
        Object.hasOwnProperty.call(c?.props, "folderNode") &&
        Object.hasOwnProperty.call(c?.props, "hovered"),
    ) as React.ReactElement & Types.Tree;
    if (IconWrapper)
      IconWrapper.props.expanded ||= SettingValues.get(
        "plainFolderIcon",
        defaultSettings.plainFolderIcon,
      );

    return res;
  });
};
