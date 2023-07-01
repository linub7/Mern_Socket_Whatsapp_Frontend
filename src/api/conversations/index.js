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
