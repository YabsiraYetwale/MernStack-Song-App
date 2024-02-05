import { createSlice } from "@reduxjs/toolkit";
const songs = createSlice({
  name: "songs",
  initialState: {
    songs: [],
  },
  reducers: {
    getSongsSlice: (state, action) => {
      state.songs = action.payload;
    },
    addSongSlice: (state, action) => {
      state.songs.push(action.payload);
    },
    editSongSlice: (state, action) => {
      state.songs = state.songs.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
    },
    deleteSongSlice: (state, action) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songs.actions;
export default songs.reducer;
