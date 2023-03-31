import {
  Button,
  Center,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useToken } from "@chakra-ui/react";
import { FiPenTool } from "react-icons/fi";

interface AppProps {
  setLineWidth: any;
  lineWidth: any;
}

const Thickness: FC<AppProps> = ({ setLineWidth, lineWidth }) => {
  //const [lineWidth, setLineWidth] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Popover variant="picker">
      <PopoverTrigger>
        <IconButton
          aria-label="Thickness of drawing tool"
          icon={<FiPenTool />}
        />
      </PopoverTrigger>
      <PopoverContent width="170px">
        <PopoverArrow />
        <PopoverCloseButton color="white" />
        <PopoverHeader borderTopLeftRadius={5} borderTopRightRadius={5}>
          <Center height="100%">Brush Thickness</Center>
        </PopoverHeader>
        <PopoverBody>
          <SimpleGrid columns={5} spacing={2}></SimpleGrid>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={100}
            id="slider"
            min={0}
            max={10}
            colorScheme="teal"
            onChange={v => setLineWidth(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${lineWidth}%`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Thickness;
