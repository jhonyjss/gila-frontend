import { AxiosResponse } from "axios";
import httpRequest from "../https-common";
import { IUserLogs } from "../../components/Logs/interfaces/IUserLogs";

export const findOne = async (id: number): Promise<AxiosResponse<any>> => {
  try {
    const response = await httpRequest.get(`/users/${id}`);
    return response;
  } catch (error) {
    console.error("users", error);
    throw error; // Add this line to rethrow the error
  }
};
