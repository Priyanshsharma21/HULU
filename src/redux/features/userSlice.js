import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user : null,
  userToken : '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    // playPause: (state, action) => {
    //   state.isPlaying = action.payload;
    // },

  },
});

// export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = userSlice.actions;
export const {  } = userSlice.actions;

export default userSlice.reducer;
