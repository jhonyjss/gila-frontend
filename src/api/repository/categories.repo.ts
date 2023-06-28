import { AxiosResponse } from "axios";
import httpRequest from "../https-common";
import { ICategories } from "../../components/Categories/ICategories.interface";

export const all = async (): Promise<AxiosResponse<ICategories[]>> => {
  try {
    const response = await httpRequest.get(`/categories`);
    return response;
  } catch (error) {
    console.error("categories", error);
    throw error; // Add this line to rethrow the error
  }
};
