// src/wasm/video-module.ts
export interface VideoState {
    isPlaying: boolean;
    currentTime: number;
    buffered: number;
    volume: number;
  }
  
  export async function createVideoModule() {
    try {
      // Dynamically import the Emscripten generated JS module
      // @ts-expect-error: WebAssembly JS wrapper is generated at runtime/build-time and not present in TS source
      const moduleFactory = await import('./video_processing.js');
      const wasmModule = await moduleFactory.default();
      return wasmModule;
    } catch (error) {
      console.error('Failed to load WebAssembly module:', error);
      throw error;
    }
  }