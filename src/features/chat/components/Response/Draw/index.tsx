import { Box, HStack } from "@chakra-ui/react";
import {
  useEffect,
  useRef,
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from "react";
import DrawMenu from "./DrawMenu";
import Frame from "../Frame";

interface AppProps {
  setToggleCamera: Dispatch<SetStateAction<boolean>>;
}

// TODO: Canvas needs to be responsive / "higher quality", it's a bit pixelated right now
function Draw({ setToggleCamera }: AppProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);

  useEffect(() => {
    console.log(lineColor);
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      // canvas.width = 500;
      // canvas.height = 500;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
      }
      ctxRef.current = ctx;
    }
  }, [lineColor, lineOpacity, lineWidth]);

  // Function for starting the drawing
  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    if (ctxRef.current) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  };

  // Function for ending the drawing
  const endDrawing = () => {
    if (ctxRef.current) {
      ctxRef.current.closePath();
      setIsDrawing(false);
    }
  };

  const draw = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    if (ctxRef.current) {
      ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctxRef.current.stroke();
    }
  };

  return (
    <Frame
      footer={
        <HStack justify="space-between" w="100%" p={5}>
          <DrawMenu
            setLineColor={setLineColor}
            setLineWidth={setLineWidth}
            setLineOpacity={setLineOpacity}
            lineWidth={lineWidth}
            lineColor={lineColor}
          />
        </HStack>
      }
    >
      <Box w="100%" h="100%">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={"500px"}
          height={"500px"}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Frame>
  );
}

export default Draw;
