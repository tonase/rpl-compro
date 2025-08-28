import { Contact, type IContact } from "~/models/contact";
import type { IObjectResponse } from "~/models/Response";

export const useContactStore = defineStore("contact", {
  state: () => ({
    contact: undefined as Contact | undefined,
  }),
  actions: {
    async fetchContact() {
      const response = await useApi<IObjectResponse<IContact>>(
        "/cms/public/contact"
      );

      this.contact = response.data?.data && new Contact(response.data.data);

      return response;
    },
  },
});
