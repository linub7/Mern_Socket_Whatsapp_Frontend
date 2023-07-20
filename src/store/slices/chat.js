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
    addMessageToActiveConversationAction: (state, action) => {
      const { payload } = action;
      state.messages = [...state.messages, payload];
      const relatedConversation = state.conversations.find(
        (conversation) =>
          conversation?._id?.toString() === payload?.conversation?.toString()
      );
      const conversation = {
        ...relatedConversation,
        latestMessage: payload,
      };
      const idx = state.conversations.findIndex(
        (el) => el?._id === conversation._id
      );
      state.conversations.splice(idx, 1);
      state.conversations.unshift(conversation);
    },
  },
});

export const {
  actions: {
    setActiveConversationAction,
    getConversationsAction,
    addToConversationsAction,
    setActiveConversationMessagesAction,
    addMessageToActiveConversationAction,
  },
} = chatSlice;

export default chatSlice.reducer;
