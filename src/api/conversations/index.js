import client from 'api/client';

export const getConversationsHandler = async (token) => {
  try {
    const { data } = await client.get(`/conversations`, {
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

export const openOrCreateConversationHandler = async (receiverId, token) => {
  try {
    const { data } = await client.post(
      `/conversations`,
      { receiverId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};
