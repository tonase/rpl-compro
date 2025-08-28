import { Language, type LanguageCode } from "~/models/Language";

export const useLanguage = () => {
  const { locale, setLocale } = useI18n();
  const { fetchLanguages } = useLanguageStore();
  const { languages } = toRefs(useLanguageStore());

  const selectedLanguage = computed<Language>(
    () =>
      languages.value.find(
        (item) => item.lowerCode === locale.value
      ) as Language
  );
  const selectedLanguageCode = computed({
    get: () => selectedLanguage.value.lowerCode,
    set: async (value: LanguageCode) => await setLocale(value),
  });

  const fetchData = async () => {
    if (languages.value.length > 0) return;

    const response = await fetchLanguages();

    if (!response.success) {
      toastResponse(response.success, response.message);
    }
  };

  onMounted(async () => {
    await nextTick();
    fetchData();
  });

  return {
    selectedLanguage,
    selectedLanguageCode,
  };
};
