// src/wasm/video_processing.cpp
#include <emscripten/bind.h>
#include <algorithm>

struct VideoState {
    bool isPlaying;
    double currentTime;
    double buffered;
    double volume;
};

VideoState processVideoState(bool isPlaying, double currentTime, double duration, double volume) {
    VideoState state;
    state.isPlaying = isPlaying;
    state.currentTime = currentTime;
    state.buffered = duration > 0 ? currentTime / duration : 0;
    state.volume = std::min(std::max(volume, 0.0), 1.0);
    return state;
}

EMSCRIPTEN_BINDINGS(video_module) {
    emscripten::function("processVideoState", &processVideoState);
    
    emscripten::value_object<VideoState>("VideoState")
        .field("isPlaying", &VideoState::isPlaying)
        .field("currentTime", &VideoState::currentTime)
        .field("buffered", &VideoState::buffered)
        .field("volume", &VideoState::volume);
}