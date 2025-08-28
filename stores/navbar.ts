import { Navbar, type INavbar } from "~/models/navbar";
import type { IObjectResponse } from "~/models/Response";

export const useNavbarStore = defineStore("navbar", {
  state: () => ({
    navbar: undefined as Navbar | undefined,
  }),
  actions: {
    async fetchNavbar() {
      const response = await useApi<IObjectResponse<INavbar>>(
        "/cms/public/navbar"
      );

      this.navbar = response.data?.data && new Navbar(response.data.data);

      return response;
    },
  },
});
