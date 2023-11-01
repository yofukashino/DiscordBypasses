import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ImageConstructor } from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  if (SettingValues.get("favIMG", defaultSettings.favIMG)) {
    ImageConstructor.IMAGE_GIF_RE = new RegExp(/\.(gif|png|jpe?g|webp)($|\?|#)/i);
  }
  PluginInjector.instead(ImageConstructor.default, "isAnimated", (args, res) => {
    if (SettingValues.get("favIMG", defaultSettings.favIMG)) {
      return true;
    }
    return res(...args);
  });
  PluginInjector.after(
    ImageConstructor.default.prototype,
    "render",
    (
      _args,
      res,
      instance: {
        props: { animated: boolean; renderAccessory?: Types.DefaultTypes.AnyFunction };
        state: { hasFocus: boolean; hasMouseOver: boolean };
      },
    ) => {
      if (!SettingValues.get("favIMG", defaultSettings.favIMG) || instance?.props?.animated) {
        return res;
      }
      if (res?.props) {
        res.props.renderAccessory = () => {
          if (instance?.state?.hasMouseOver || instance?.state?.hasFocus) {
            return instance?.props?.renderAccessory?.();
          }
        };
      }
      return res;
    },
  );
};
