import { webpack } from "replugged";
import { React, toast as Toasts } from "replugged/common";
import { Button, Flex, FormItem, Text } from "replugged/components";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default ({ value, onChange, disabled }: Types.ImagePickerProps) => {
  const ImageInputWrapper = webpack.getFunctionBySource<
    React.ComponentClass<{ onChange: (...args: unknown[]) => void }>
  >(Modules.ImageInput ?? {}, ".Messages.UNABLE_TO_PROCESS_IMAGE");
  const [img, setImg] = React.useState(value);
  return (
    !disabled && (
      <FormItem
        key="Stream Preview"
        divider={false}
        style={{
          marginBottom: "6px",
        }}>
        <Flex
          align={Flex.Align.CENTER}
          direction={Flex.Direction.VERTICAL}
          style={{
            gap: "6px",
          }}>
          {img ? (
            <div
              key={img}
              style={{
                backgroundImage: `url(${img})`,
                width: "152px",
                height: "152px",
                borderRadius: "10px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          ) : null}
          {img ? (
            <Flex
              align={Flex.Align.CENTER}
              style={{
                marginTop: "6px",
                gap: "6px",
              }}>
              <Button
                color={Button.Colors.WHITE}
                look={Button.Looks.OUTLINED}
                onClick={() => {
                  setImg("");
                  onChange("");
                }}>
                Remove Preview
              </Button>
              <Button color={Button.Colors.WHITE} look={Button.Looks.OUTLINED}>
                Change Preview
                <ImageInputWrapper
                  onChange={(img: string) => {
                    const sizeInBytes = atob(img.split(",")[1])?.length;
                    if (sizeInBytes / 1024 > 200) {
                      Toasts.toast("File Must be under 200kb.", Toasts.Kind.FAILURE);
                      return;
                    }
                    setImg(img);
                    onChange(img);
                  }}
                />
              </Button>
            </Flex>
          ) : (
            <>
              <Button color={Button.Colors.WHITE} look={Button.Looks.OUTLINED}>
                Add Preview
                <ImageInputWrapper
                  onChange={(img: string) => {
                    const sizeInBytes = atob(img.split(",")[1])?.length;
                    if (sizeInBytes / 1024 > 200) {
                      Toasts.toast("File Must be under 200kb.", Toasts.Kind.FAILURE);
                      return;
                    }
                    setImg(img);
                    onChange(img);
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
};
