import axios from "axios";

const API_POST = "https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${API_POST}/register`, {
      id: id,
      password: password,
      nickname: nickname,
    });

    return response.data;
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

export const signin = async ({ id, password }) => {
  try {
    const response = await axios.post(`${API_POST}/login?expiresIn=60m`, {
      id: id,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${API_POST}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert(error?.response?.data?.message);
      localStorage.clear();
    }
  }
};

export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.patch(`${API_POST}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  }
};
