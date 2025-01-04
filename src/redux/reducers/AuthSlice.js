import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logeduser: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
      state.logeduser = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));

    },
    loginUser: (state, action) => {
      state.logeduser = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.logeduser = null;
      localStorage.removeItem('user');
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
