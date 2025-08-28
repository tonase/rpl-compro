import type { IObjectResponse } from "~/models/Response";
import {
  ServiceExcellence,
  type IServiceExcellence,
} from "~/models/service/Excellence";
import {
  ServiceLogisticStep,
  type IServiceLogisticStep,
} from "~/models/service/LogisticStep";
import { ServiceTitle, type IServiceTitle } from "~/models/service/Title";

export const useServiceStore = defineStore("service", {
  state: () => ({
    title: undefined as ServiceTitle | undefined,
    logisticStep: undefined as ServiceLogisticStep | undefined,
    excellence: undefined as ServiceExcellence | undefined,
  }),
  actions: {
    async fetchTitle() {
      const response = await useApi<IObjectResponse<IServiceTitle>>(
        "/cms/public/service-title"
      );

      this.title = response.data?.data && new ServiceTitle(response.data.data);

      return response;
    },
    async fetchLogisticStep() {
      const response = await useApi<IObjectResponse<IServiceLogisticStep>>(
        "/cms/public/service-logistic-step"
      );

      this.logisticStep =
        response.data?.data && new ServiceLogisticStep(response.data.data);

      return response;
    },
    async fetchExcellence() {
      const response = await useApi<IObjectResponse<IServiceExcellence>>(
        "/cms/public/service-excellence"
      );

      this.excellence =
        response.data?.data && new ServiceExcellence(response.data.data);

      return response;
    },
  },
});
