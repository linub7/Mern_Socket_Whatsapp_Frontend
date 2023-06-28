import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'loading' | 'done',
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatusAction: (state, action) => {
      const { payload } = action;
      state.status = payload;
    },
  },
});

export const {
  actions: { setStatusAction },
} = statusSlice;

export default statusSlice.reducer;
