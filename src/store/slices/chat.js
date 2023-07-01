import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversations: [],
  activeConversation: {},
  notifications: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveConversationAction: (state, action) => {
      const { payload } = action;
      state.activeConversation = payload;
    },
    getConversationsAction: (state, action) => {
      const { payload } = action;
      state.conversations = payload;
    },
  },
});

export const {
  actions: { setActiveConversationAction, getConversationsAction },
} = chatSlice;

export default chatSlice.reducer;
