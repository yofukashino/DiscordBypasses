import { util } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { FolderConstructor } from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  PluginInjector.after(
    FolderConstructor,
    "default",
    (_args, res: React.ReactElement & Types.Tree) => {
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
    },
  );
};
