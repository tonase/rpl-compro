<template>
  <v-app-bar flat :color="bgColor" height="96" class="app-bar-transition">
    <v-row no-gutters justify="center">
      <v-col cols="10">
        <div class="d-flex justify-space-between align-center">
          <v-img
            :src="logo"
            width="144"
            height="48"
            max-width="144"
            max-height="48"
          ></v-img>

          <div class="d-flex ga-15">
            <nuxt-link
              v-for="menu in menus"
              :key="menu.link"
              :to="menu.link"
              :class="`text-${color} text-uppercase`"
              style="letter-spacing: 3px"
            >
              {{ menu.title }}
            </nuxt-link>
          </div>

          <div class="d-flex align-center ga-4">
            <base-language :color="color"></base-language>

            <base-btn
              color="secondary"
              variant="outlined"
              class="text-caption"
              @click="openDialog"
            >
              Login
            </base-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { openDialog } = useLoginDialog();

const isScrolled = ref(false);

const bgColor = computed(() => {
  return isScrolled.value ? "white" : "transparent";
});
const logo = computed(() => {
  return isScrolled.value ? "/Logo-Color.png" : "/Logo-White.png";
});
const color = computed(() => {
  return isScrolled.value ? "primary" : "white";
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80;
};

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
