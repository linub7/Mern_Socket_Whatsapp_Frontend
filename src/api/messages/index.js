import client from 'api/client';

export const getConversationMessagesHandler = async (conversationId, token) => {
  try {
    const { data } = await client.get(`/messages/${conversationId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};
