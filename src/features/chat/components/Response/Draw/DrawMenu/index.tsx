import ColorPicker from "@/features/chat/components/Response/Draw/DrawMenu/ColorPicker";
import { Box, HStack, Input, VStack } from "@chakra-ui/react";
import Thickness from "./Thickness";

const Menu = ({
  lineColor,
  setLineColor,
  setLineWidth,
  setLineOpacity,
  lineWidth,
}: any) => {
  return (
    <HStack w="100%" px={5} justify="center">
      <ColorPicker lineColor={lineColor} setLineColor={setLineColor} />
      <Thickness lineWidth={lineWidth} setLineWidth={setLineWidth} />
      {/* <label>Brush Width </label> */}
      {/* <input
        type="range"
        min="3"
        max="20"
        onChange={e => {
          setLineWidth(e.target.value);
        }}
      /> */}
      {/* <label>Brush Opacity</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={e => {
          setLineOpacity(parseInt(e.target.value) / 100);
        }}
      /> */}
    </HStack>
  );
};

export default Menu;
