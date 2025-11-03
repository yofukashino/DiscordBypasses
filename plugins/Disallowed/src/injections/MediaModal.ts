import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { MediaModal } from "@lib/RequiredModules";

import type { Image, ImageProps, ImageState } from "@lib/RequiredModules/MediaModal";

const [IMAGE_GIF_RE] = Object.entries(MediaModal).find(
  ([_key, value]) => value instanceof RegExp && value.test(".gif"),
);

if (IMAGE_GIF_RE)
  Object.defineProperty(MediaModal, IMAGE_GIF_RE, {
    get: () => {
      return SettingValues.get("favIMG", DefaultSettings.favIMG)
        ? /\.(gif|png|jpe?g|webp)($|\?|#)/i
        : /\.gif($|\?|#)/i;
    },
    configurable: true,
    enumerable: true,
  });

const Image = webpack.getFunctionBySource<Image>(MediaModal, "handleImageLoad");

PluginInjector.instead(Image, "isAnimated", (args, res) =>
  SettingValues.get("favIMG", DefaultSettings.favIMG) ? true : res(...args),
);

PluginInjector.after(
  Image.prototype,
  "render",
  (_args, res, instance: { props: ImageProps; state: ImageState }) => {
    if (!SettingValues.get("favIMG", DefaultSettings.favIMG) || instance?.props?.animated)
      return res;

    if (res?.props)
      res.props.renderAccessory = () => {
        if (instance?.state?.hasMouseOver || instance?.state?.hasFocus)
          return instance?.props?.renderAccessory?.();
      };

    return res;
  },
);
