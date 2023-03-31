/**
 * Camera functionality module
 */
const camera = (function (): {
  video: HTMLVideoElement | null;
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  startCamera: (w?: number, h?: number) => Promise<string | undefined>;
  takeSnapshot: () => string;
} {
  return {
    video: null,
    context: null,
    canvas: null,

    startCamera: async function (w = 680, h = 800) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const video: HTMLVideoElement = document.getElementById(
          "pending",
        ) as HTMLVideoElement;
        this.video = video;

        video.autoplay = true;

        // height = this.video!.videoHeight / (this.video!.videoWidth / width);
        // if (isNaN(height)) {
        //   height = width / (4 / 3);
        // }

        //video.height = height;

        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          this.video.srcObject = stream;
          this.video.play();
          return Promise.resolve("Permissions given");
        } catch (err) {
          return Promise.reject("No permissions");
        }
      }
    },

    takeSnapshot: function () {
      const canvas: HTMLCanvasElement = document.getElementById(
        "finished",
      ) as HTMLCanvasElement;

      canvas.width = this.video!.videoWidth;
      canvas.height = this.video!.videoHeight;

      this.canvas = canvas;
      this.context = this.canvas.getContext("2d");

      this.context!.drawImage(
        this.video as CanvasImageSource,
        0,
        0,
        this.video!.videoWidth,
        this.video!.videoHeight,
      );
      const dataURL = canvas.toDataURL();
      return dataURL;
    },
  };
})();

export default camera;
