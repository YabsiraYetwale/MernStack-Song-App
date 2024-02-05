import { createSlice } from "@reduxjs/toolkit";

const song = createSlice({
  name: "song",
  initialState: {
    song: [],
  },
  reducers: {
    setSongSlice: (state, action) => {
      state.song = action.payload;
    },
  },
});
export const { setSongSlice } = song.actions;
export default song.reducer;
