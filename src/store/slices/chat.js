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
    addToConversationsAction: (state, action) => {
      const { payload } = action;
      state.conversations.push(payload);
    },
  },
});

export const {
  actions: {
    setActiveConversationAction,
    getConversationsAction,
    addToConversationsAction,
  },
} = chatSlice;

export default chatSlice.reducer;
