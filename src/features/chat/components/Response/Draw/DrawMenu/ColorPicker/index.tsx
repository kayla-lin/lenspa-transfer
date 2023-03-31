import {
  Button,
  Center,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useToken } from "@chakra-ui/react";

interface AppProps {
  setLineColor: any;
  lineColor: any;
}

const ColorPicker: FC<AppProps> = ({ setLineColor, lineColor }) => {
  //const [lineColor, setlineColor] = useState("gray.500");

  const colors = useToken(
    // the key within the theme, in this case `theme.lineColors`
    "colors",
    // the subkey(s), resolving to `theme.lineColors.red.100`
    [
      "gray.500",
      "red.500",
      "gray.700",
      "green.500",
      "blue.500",
      "blue.800",
      "yellow.500",
      "orange.500",
      "purple.500",
      "pink.500",
    ],
    // a single fallback or fallback array matching the length of the previous arg
  );

  return (
    <Popover variant="picker">
      <PopoverTrigger>
        <Button
          aria-label={lineColor}
          background={lineColor}
          height="40px"
          width="40px"
          padding={0}
          minWidth="unset"
          borderRadius={3}
        ></Button>
      </PopoverTrigger>
      <PopoverContent width="170px">
        <PopoverArrow bg={lineColor} />
        <PopoverCloseButton color="white" />
        <PopoverHeader
          height="100px"
          backgroundColor={lineColor}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          color="white"
        >
          <Center height="100%">{lineColor}</Center>
        </PopoverHeader>
        <PopoverBody height="120px">
          <SimpleGrid columns={5} spacing={2}>
            {colors.map(c => (
              <Button
                key={c}
                aria-label={c}
                background={c}
                height="22px"
                width="22px"
                padding={0}
                minWidth="unset"
                borderRadius={3}
                _hover={{ background: c }}
                onClick={() => {
                  setLineColor(c);
                }}
              ></Button>
            ))}
          </SimpleGrid>
          <Input
            borderRadius={3}
            marginTop={3}
            placeholder="red.100"
            size="sm"
            value={lineColor}
            onChange={e => {
              setLineColor(e.target.value);
            }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
