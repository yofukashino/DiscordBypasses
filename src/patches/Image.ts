import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ImageConstructorModule } from "../lib/requiredModules";
import * as Types from "../types";
export const patchImage = (): void => {
  const ImageConstructor = webpack.getFunctionBySource<
    { isAnimated: Types.DefaultTypes.AnyFunction } & Types.DefaultTypes.AnyFunction
  >(ImageConstructorModule, ".isAnimated(");
  const regexKey = Object.entries(ImageConstructorModule).find(
    ([_key, value]) => value instanceof RegExp,
  )[0];
  if (SettingValues.get("favIMG", defaultSettings.favIMG)) {
    ImageConstructorModule[regexKey] = new RegExp(/\.(gif|png|jpe?g|webp)($|\?|#)/i);
  }
  PluginInjector.instead(ImageConstructor, "isAnimated", (args, res) => {
    if (SettingValues.get("favIMG", defaultSettings.favIMG)) {
      return true;
    }
    return res(...args);
  });
};
