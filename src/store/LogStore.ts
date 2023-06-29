import { IUserLogs } from "@components/Logs/interfaces/IUserLogs";
import { CreateLogs, ILogs } from "./../components/Logs/interfaces/ILogs";
import { defineStore } from "pinia";

export const useLogsStore = defineStore("logs", {
  state: () => ({ logs: {} as CreateLogs, listLogs: [] as any }),
  getters: {
    getLogs: (state) => state.logs
  },
  actions: {
    create(body: Partial<CreateLogs>) {
      console.log({ ...this.logs, ...body });
      this.logs = { ...this.logs, ...body, users: Number(import.meta.env.VITE_APP_USERID) };
    },
    savedLogs(payload: IUserLogs[] | any) {
      console.log("savedLogs");
      this.listLogs = { ...payload, logs: payload.logs.reverse() };
    }
  }
});
