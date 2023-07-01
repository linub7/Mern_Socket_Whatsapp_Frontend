import client from 'api/client';

export const searchUsersHandler = async (searchTerm, token) => {
  try {
    const { data } = await client.get(
      `/users/search?searchTerm=${searchTerm}`,
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
