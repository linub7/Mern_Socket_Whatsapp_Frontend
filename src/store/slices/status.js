import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'loading' | 'done',
  loading: false,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatusAction: (state, action) => {
      const { payload } = action;
      state.status = payload;
    },
    setLoadingAction: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
  },
});

export const {
  actions: { setStatusAction, setLoadingAction },
} = statusSlice;

export default statusSlice.reducer;
