import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversations: [],
  activeConversation: {},
  notifications: [],
  messages: [],
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
    setActiveConversationMessagesAction: (state, action) => {
      const { payload } = action;
      state.messages = payload;
    },
  },
});

export const {
  actions: {
    setActiveConversationAction,
    getConversationsAction,
    addToConversationsAction,
    setActiveConversationMessagesAction,
  },
} = chatSlice;

export default chatSlice.reducer;
