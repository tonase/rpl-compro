export const useNavbar = () => {
  const { fetchNavbar } = useNavbarStore();
  const { navbar } = toRefs(useNavbarStore());
  const { locale } = useI18n();

  const menus = computed(() => [
    {
      title: navbar.value?.content?.about,
      link: "/about",
    },
    {
      title: navbar.value?.content?.service,
      link: "/service",
    },
    {
      title: navbar.value?.content?.contact,
      link: "/contact",
    },
  ]);

  const fetchData = async () => {
    const response = await fetchNavbar();

    if (!response.success) {
      toastResponse(response.success, response.message);
    }
  };

  onMounted(async () => {
    await nextTick();
    fetchData();
  });

  watch(locale, () => fetchData());

  return {
    menus,
    fetchData,
    navbar,
  };
};
