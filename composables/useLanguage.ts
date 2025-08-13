import { Language, type ILanguage, type LanguageCode } from "~/models/Language";

export const useLanguage = () => {
  const { locale, setLocale } = useI18n();

  const selectedLanguage = computed<ILanguage>(() =>
    Language.parse(locale.value)
  );
  const selectedLanguageCode = computed({
    get: () => selectedLanguage.value.code,
    set: async (value: LanguageCode) => await setLocale(value),
  });

  return {
    selectedLanguage,
    selectedLanguageCode,
  };
};
