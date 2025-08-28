import { AboutBody, type IAboutBody } from "~/models/about/Body";
import {
  AboutCompanyValue,
  type IAboutCompanyValue,
} from "~/models/about/CompanyValue";
import { AboutTitle, type IAboutTitle } from "~/models/about/Title";
import { AboutVision, type IAboutVision } from "~/models/about/Vision";
import type { IObjectResponse } from "~/models/Response";

export const useAboutStore = defineStore("about", {
  state: () => ({
    title: undefined as AboutTitle | undefined,
    vision: undefined as AboutVision | undefined,
    mission: undefined as AboutVision | undefined,
    body: undefined as AboutBody | undefined,
    companyValue: undefined as AboutCompanyValue | undefined,
  }),
  actions: {
    async fetchTitle() {
      const response = await useApi<IObjectResponse<IAboutTitle>>(
        "/cms/public/about-title"
      );

      this.title = response.data?.data && new AboutTitle(response.data.data);

      return response;
    },
    async fetchVision() {
      const response = await useApi<IObjectResponse<IAboutVision>>(
        "/cms/public/about-vision"
      );

      this.vision = response.data?.data && new AboutVision(response.data.data);

      return response;
    },
    async fetchMission() {
      const response = await useApi<IObjectResponse<IAboutVision>>(
        "/cms/public/about-mission"
      );

      this.mission = response.data?.data && new AboutVision(response.data.data);

      return response;
    },
    async fetchBody() {
      const response = await useApi<IObjectResponse<IAboutBody>>(
        "/cms/public/about-body"
      );

      this.body = response.data?.data && new AboutBody(response.data.data);

      return response;
    },
    async fetchCompanyValue() {
      const response = await useApi<IObjectResponse<IAboutCompanyValue>>(
        "/cms/public/about-company-value"
      );

      this.companyValue =
        response.data?.data && new AboutCompanyValue(response.data.data);

      return response;
    },
  },
});
