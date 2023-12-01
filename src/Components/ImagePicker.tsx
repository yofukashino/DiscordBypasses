import { React, toast as Toasts } from "replugged/common";
import { Button, Flex, FormItem, Text } from "replugged/components";
import { ImageInput } from "../lib/requiredModules";
import Types from "../types";

export default class ImagePickerItem extends React.Component<
  Types.ImagePickerProps,
  Types.ImagePickerState
> {
  constructor(props: Types.ImagePickerProps) {
    super(props);
    this.state = { img: this.props.value };
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({ img: "" });
    this.props.onChange("");
  }
  render() {
    return (
      !this.props.disabled && (
        <FormItem
          {...{
            key: "Stream Preview",
            divider: false,
            style: {
              marginBottom: "6px",
            },
          }}>
          <Flex
            {...{
              align: Flex.Align.CENTER,
              direction: Flex.Direction.VERTICAL,
              style: {
                gap: "6px",
              },
            }}>
            {this.state.img ? (
              <div
                {...{
                  key: this.state.img,
                  width: "152px",
                  height: "152px",
                  style: {
                    backgroundImage: `url(${this.state.img})`,
                    width: "152px",
                    height: "152px",
                    borderRadius: "10px",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                }}
              />
            ) : null}
            {this.state.img ? (
              <Flex
                {...{
                  align: Flex.Align.CENTER,
                  style: {
                    marginTop: "6px",
                    gap: "6px",
                  },
                }}>
                <Button
                  {...{
                    color: Button.Colors.WHITE,
                    look: Button.Looks.OUTLINED,
                    onClick: () => this.clear(),
                  }}>
                  Remove Preview
                </Button>
                <Button {...{ color: Button.Colors.WHITE, look: Button.Looks.OUTLINED }}>
                  Change Preview
                  <ImageInput.default
                    {...{
                      onChange: (img: string) => {
                        const sizeInBytes = atob(img.split(",")[1])?.length;
                        if (sizeInBytes / 1024 > 200) {
                          Toasts.toast("File Must be under 200kb.", Toasts.Kind.FAILURE);
                          return;
                        }
                        this.setState({ img });
                        this.props.onChange(img);
                      },
                    }}
                  />
                </Button>
              </Flex>
            ) : (
              <>
                <Button {...{ color: Button.Colors.WHITE, look: Button.Looks.OUTLINED }}>
                  Add Preview
                  <ImageInput.default
                    {...{
                      onChange: (img: string) => {
                        this.setState({ img });
                        this.props.onChange(img);
                      },
                    }}
                  />
                </Button>
                <Text.Normal>Leave Empty for no stream preview.</Text.Normal>
              </>
            )}
          </Flex>
        </FormItem>
      )
    );
  }
}
