import { ContentLogin, type IContentLogin } from "~/models/login/Content";
import type { IObjectResponse } from "~/models/Response";

export const useLoginStore = defineStore("login", {
  state: () => ({
    formLogin: undefined as ContentLogin | undefined,
  }),
  actions: {
    async fetchFormLogin() {
      const response = await useApi<IObjectResponse<IContentLogin>>(
        "/cms/public/form-login"
      );

      this.formLogin =
        response.data?.data && new ContentLogin(response.data.data);

      return response;
    },
  },
});
