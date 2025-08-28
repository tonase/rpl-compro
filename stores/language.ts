import { Language } from "~/models/Language";
import type { IArrayResponse } from "~/models/Response";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    languages: [] as Language[],
  }),
  actions: {
    async fetchLanguages() {
      const response = await useApi<IArrayResponse<Language>>(
        "/cms/public/language"
      );

      this.languages = Array.isArray(response.data?.data)
        ? response.data.data.map((item) => new Language(item))
        : [];

      return response;
    },
  },
});
