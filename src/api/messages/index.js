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

export const sendMessageHandler = async (formData, token) => {
  try {
    const { data } = await client.post(`/messages`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};
