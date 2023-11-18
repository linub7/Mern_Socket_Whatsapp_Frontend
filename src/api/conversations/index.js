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

export const openOrCreateConversationHandler = async (
  receiverId,
  isGroup,
  token
) => {
  try {
    const { data } = await client.post(
      `/conversations`,
      { receiverId, isGroup },
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

export const createGroupConversationHandler = async (users, name, token) => {
  try {
    const { data } = await client.post(
      `/conversations/group`,
      { users, name },
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
