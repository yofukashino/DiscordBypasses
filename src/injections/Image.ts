import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default (): void => {
  const { ImageConstructor } = Modules;

  if (SettingValues.get("favIMG", defaultSettings.favIMG)) {
    const [IMAGE_GIF_RE] = Object.entries(ImageConstructor).find(
      ([_key, value]) => value instanceof RegExp && value.test(".gif"),
    );
    ImageConstructor[IMAGE_GIF_RE] = new RegExp(/\.(gif|png|jpe?g|webp)($|\?|#)/i);
  }

  const MainImageConstructor = webpack.getFunctionBySource<
    Types.DefaultTypes.AnyFunction & { isAnimated: Types.DefaultTypes.AnyFunction }
  >(ImageConstructor, "handleImageLoad");

  PluginInjector.instead(MainImageConstructor, "isAnimated", (args, res) => {
    if (SettingValues.get("favIMG", defaultSettings.favIMG)) {
      return true;
    }
    return res(...args);
  });
  PluginInjector.after(
    MainImageConstructor.prototype,
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
