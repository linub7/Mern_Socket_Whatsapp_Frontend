import client from 'api/client';

export const signupHandler = async (formData) => {
  try {
    const { data } = await client.post(`/auth/signup`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const signinHandler = async (values) => {
  try {
    const { data } = await client.post(`/auth/signin`, { ...values });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const forgotPasswordHandler = async (values) => {
  try {
    const { data } = await client.post(`/auth/forgot-password`, {
      ...values,
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const resetPasswordHandler = async (values, token) => {
  try {
    const { data } = await client.patch(`/auth/reset-password/${token}`, {
      ...values,
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const signoutHandler = async (token) => {
  try {
    const { data } = await client.get(`/auth/signout`, {
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

export const updateUserInfoHandler = async (formData, token) => {
  try {
    const { data } = await client.patch(`/me/update`, formData, {
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

export const updateUserPasswordHandler = async (values, token) => {
  try {
    const { data } = await client.patch(
      `/auth/update-my-password`,
      { ...values },
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
