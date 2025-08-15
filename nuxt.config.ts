// https://nuxt.com/docs/api/configuration/nuxt-config
import "./config/index.ts";
import type { LanguageCode } from "./models/Language.js";

const defaultLocale = (process.env.NUXT_PUBLIC_DEFAULT_LOCALE ||
  "en") as LanguageCode;

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.scss"],
  modules: ["vuetify-nuxt-module", "@nuxtjs/i18n"],
  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: "#354254",
              secondary: "#FF9A27",
              tertiary: "#E5E9EF",
              background: "#EFF1F4",
              neutralSecondary: "#99A1AC",
            },
          },
        },
      },
    },
  },
  i18n: {
    defaultLocale,
    locales: ["en", "id"],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "rpl.i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
      fallbackLocale: defaultLocale,
    },
    vueI18n: "~/i18n.config.ts",
  },
});
