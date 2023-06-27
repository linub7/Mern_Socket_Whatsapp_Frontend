import { createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const initialState = {
  status: '',
  error: '',
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
    logoutAction: (state) => {
      state.status = '';
      state.error = '';
      state.user = {
        id: '',
        name: '',
        email: '',
        picture: '',
        status: '',
        token: '',
      };
    },
  },
});

export const {
  actions: { logoutAction },
} = userSlice;

export default userSlice.reducer;
