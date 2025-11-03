import { webpack } from "replugged";

export interface ImageChildrenProps {
  alt: string;
  className: string;
  mediaLayoutType: string;
  size: { width: number; height: number };
  src: string;
}

export interface ImageProps {
  id?: string;
  zoomable?: boolean;
  alt: string;
  animated: boolean;
  autoPlay: boolean;
  height: number;
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  onContextMenu: (e: React.MouseEvent) => void;
  placeholder: number;
  responsive: boolean;
  shouldLink: boolean;
  shouldRenderAccessory: boolean;
  src: string;
  width: number;
  children: React.FC<ImageChildrenProps>;
  renderAccessory?: () => React.ReactElement | void;
}

export interface ImageState {
  readyState: string;

  hasFocus: boolean;
  hasMouseOver: boolean;
}

export type Image = React.PureComponent<ImageProps, ImageState> & {
  isAnimated: () => boolean;
  prototype: { render: () => React.ReactElement<ImageProps> };
};

export type MediaModal = Record<string, Image>;

export default await webpack
  .waitForModule<MediaModal>(webpack.filters.bySource("/\\.gif($|\\?|#)/i"), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find Media Module");
  });
