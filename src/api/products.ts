import { API } from "./axios";

export const getProducts = async () => {
  try {
    const { data } = await API.get("/products");
    return data;
  } catch (error) {
    console.error(error);
  }
};
