import { createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    picture: '',
    status: '',
    token: Cookie.get('token') ? JSON.parse(Cookie.get('token')) : null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticationAction: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
    logoutAction: (state) => {
      state.user = {
        id: '',
        name: '',
        email: '',
        picture: '',
        status: '',
        token: null,
      };
    },
  },
});

export const {
  actions: { logoutAction, authenticationAction },
} = userSlice;

export default userSlice.reducer;
