<template>
  <v-app-bar
    flat
    :color="bgColor"
    height="96"
    class="px-container app-bar-transition"
  >
    <div class="d-flex justify-space-between align-center w-100">
      <nuxt-link :to="localePath('/')">
        <v-img
          :src="logo"
          width="144"
          height="48"
          max-width="144"
          max-height="48"
        ></v-img>
      </nuxt-link>

      <div v-if="mdAndUp" class="d-flex ga-15">
        <v-list-item
          v-for="menu in menus"
          :key="menu.link"
          :to="localePath(menu.link)"
          class="text-uppercase ls-3 opacity-100"
          variant="plain"
          color="secondary"
          :base-color="color"
        >
          {{ menu.title }}
        </v-list-item>
      </div>

      <div class="d-flex align-center ga-4">
        <base-language v-if="mdAndUp" :color="color"></base-language>

        <base-btn
          color="secondary"
          variant="outlined"
          class="text-caption"
          @click="openDialog"
        >
          Login
        </base-btn>

        <v-app-bar-nav-icon
          v-if="!mdAndUp"
          @click="emit('toggleDrawer')"
        ></v-app-bar-nav-icon>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
const emit = defineEmits(["toggleDrawer"]);
const { t } = useI18n();
const localePath = useLocalePath();
const { openDialog } = useLoginDialog();
const route = useRoute();
const { mdAndUp } = useDisplay();

const isScrolled = ref(false);
const isWhitePages = ref(false);

const bgColor = computed(() => {
  return isScrolled.value || isWhitePages.value ? "white" : "transparent";
});
const logo = computed(() => {
  return isScrolled.value || isWhitePages.value
    ? "/Logo-Color.png"
    : "/Logo-White.png";
});
const color = computed(() => {
  return isScrolled.value || isWhitePages.value ? "primary" : "white";
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80;
};

watch(route, (val) => {
  isWhitePages.value =
    ["/service", "/contact", "/privacy-policy"]
      .map((el) => localePath(el))
      .includes(val.path) && val.path !== localePath("/");
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const menus = computed(() => [
  {
    title: t("menu.about"),
    link: "/about",
  },
  {
    title: t("menu.service"),
    link: "/service",
  },
  {
    title: t("menu.contact"),
    link: "/contact",
  },
]);
</script>

<style scoped>
.app-bar-transition {
  transition: background-color 0.4s ease, color 0.4s ease;
}
</style>
