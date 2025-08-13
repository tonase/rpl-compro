import en from "./locales/en";
import id from "./locales/id";
import type { LanguageCode } from "./models/Language";

const fallbackLocale = (process.env.NUXT_PUBLIC_DEFAULT_LOCALE ||
  "id") as LanguageCode;

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale,
  messages: {
    id,
    en,
  },
}));
