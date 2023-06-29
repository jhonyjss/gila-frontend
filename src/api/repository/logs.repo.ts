import { AxiosResponse } from "axios";
import httpRequest from "../https-common";
import { CreateLogs } from "../../components/Logs/interfaces/ILogs";

export const create = async (body: Partial<CreateLogs>): Promise<AxiosResponse<string>> => {
  try {
    const response = await httpRequest.post(`/logs`, body);
    return response;
  } catch (error) {
    console.error("logs", error);
    throw error; // Add this line to rethrow the error
  }
};
