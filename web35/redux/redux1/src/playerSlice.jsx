import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  isPlaying: false,
  isLoop: false,
  isShuffle: false,
};

const playerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCurrentSong,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    nextSong,
    prevSong,
  },
});

export const {
  changeCurrentSong,
  togglePlay,
  toggleLoop,
  toggleShuffle,
  nextSong,
  prevSong,
} = playerSlice.action;
