/// <reference types="vite/client" />

declare module '*.onnx' {
  const path: string;
  export default path;
}
