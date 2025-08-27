import { HomeClient, type IHomeClient } from "~/models/home/Client";
import { HomeService, type IHomeService } from "~/models/home/Service";
import { HomeTitle, type IHomeTitle } from "~/models/home/Title";
import {
  HomeTrackRecord,
  type IHomeTrackRecord,
} from "~/models/home/TrackRecord";
import { HomeWhy, type IHomeWhy } from "~/models/home/Why";
import type { IObjectResponse } from "~/models/Response";

export const useHomeStore = defineStore("home", {
  state: () => ({
    title: undefined as HomeTitle | undefined,
    why: undefined as HomeWhy | undefined,
    service: undefined as HomeService | undefined,
    trackRecord: undefined as HomeTrackRecord | undefined,
    client: undefined as HomeClient | undefined,
  }),
  actions: {
    async fetchTitle() {
      const response = await useApi<IObjectResponse<IHomeTitle>>(
        "/cms/public/home-title"
      );

      this.title = response.data?.data && new HomeTitle(response.data.data);

      return response;
    },
    async fetchWhy() {
      const response = await useApi<IObjectResponse<IHomeWhy>>(
        "/cms/public/home-why"
      );

      this.why = response.data?.data && new HomeWhy(response.data.data);

      return response;
    },
    async fetchService() {
      const response = await useApi<IObjectResponse<IHomeService>>(
        "/cms/public/home-service"
      );

      this.service = response.data?.data && new HomeService(response.data.data);

      return response;
    },
    async fetchTrackRecord() {
      const response = await useApi<IObjectResponse<IHomeTrackRecord>>(
        "/cms/public/home-track-record"
      );

      this.trackRecord =
        response.data?.data && new HomeTrackRecord(response.data.data);

      return response;
    },
    async fetchClient() {
      const response = await useApi<IObjectResponse<IHomeClient>>(
        "/cms/public/home-client"
      );

      this.client = response.data?.data && new HomeClient(response.data.data);

      return response;
    },
  },
});
