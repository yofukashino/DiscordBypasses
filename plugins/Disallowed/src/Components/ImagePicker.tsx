import { React, toast } from "replugged/common";
import { Button, Flex, Text } from "replugged/components";
import { Image } from "@lib/RequiredModules";

import "./ImagePicker.css";

export interface ImagePickerProps {
  value: string;
  disabled?: boolean;
  onChange: (newvalue: string) => void;
}

export default ({ value, onChange, disabled }: ImagePickerProps): React.ReactElement => {
  const [img, setImg] = React.useState(value);

  const action = (img: string): void => {
    const sizeInBytes = atob(img.split(",")[1])?.length;
    if (sizeInBytes / 1024 > 200) {
      toast.toast("File Must be under 200kb.", toast.Kind.FAILURE);
      return;
    }
    setImg(img);
    onChange(img);
  };

  return (
    !disabled && (
      <>
        <Flex
          align={Flex.Align.CENTER}
          direction={Flex.Direction.HORIZONTAL}
          justify={Flex.Justify.AROUND}
          className="discordBypasses-imagePicker">
          <span key={img} className="discordBypasses-imagePicker-preview">
            {img ? (
              <img src={img} />
            ) : (
              <Text
                className="discordBypasses-imagePicker-previewText"
                variant="heading-sm/semibold">
                Leave Empty for no stream preview.
              </Text>
            )}
          </span>
          <Button color={Button.Colors.WHITE} look={Button.Looks.OUTLINED}>
            {img ? "Change Preview" : "Add Preview"}
            <Image.Input onChange={action} />
          </Button>
          {img && (
            <Button
              color={Button.Colors.WHITE}
              look={Button.Looks.OUTLINED}
              onClick={() => {
                setImg("");
                onChange("");
              }}>
              Remove Preview
            </Button>
          )}
        </Flex>
      </>
    )
  );
};
