import { AxiosResponse } from "axios";
import httpRequest from "../https-common";
import { INotifications } from "../../components/Notifications/INotifications.interface";

export const all = async (): Promise<AxiosResponse<INotifications[]>> => {
  try {
    const response = await httpRequest.get(`/notifications`);
    return response;
  } catch (error) {
    console.error("notifications", error);
    throw error; // Add this line to rethrow the error
  }
};
