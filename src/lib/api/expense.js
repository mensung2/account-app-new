import axios from "axios";

const JSON_SERVER = "https://unique-inconclusive-calendula.glitch.me";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER}/expenses`);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export const postExpenses = async (newExpenses) => {
  try {
    const { data } = await axios.post(`${JSON_SERVER}/expenses`, newExpenses);
    return data;
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(`${JSON_SERVER}/expenses/${queryKey[1]}`);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export const putExpense = async (updatedExpenses) => {
  const { id, ...rest } = updatedExpenses;

  try {
    const response = await axios.put(`${JSON_SERVER}/expenses/${id}`, rest);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER}/expenses/${id}`);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};
