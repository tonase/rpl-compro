<template>
  <div>
    <base-footer-contact></base-footer-contact>

    <v-footer color="primary" class="px-container">
      <div class="w-100 py-8 text-subtitle-2">
        <div
          class="d-flex flex-column flex-sm-row justify-space-between align-center mb-4 ga-6"
        >
          <nuxt-link :to="localePath('/')">
            <v-img
              src="/Logo-White.png"
              width="120"
              height="48"
              max-width="120"
              max-height="48"
            ></v-img>
          </nuxt-link>

          <div class="d-flex flex-column flex-sm-row align-center ga-6">
            <v-list-item
              v-for="menu in menus"
              :key="menu.link"
              :to="localePath(menu.link)"
              :active="$route.path === localePath(menu.link)"
              class="text-uppercase ls-3 opacity-100"
              variant="plain"
              color="secondary"
              base-color="white"
            >
              {{ menu.title }}
            </v-list-item>
          </div>

          <div>© all rights reserved</div>
        </div>

        <div class="text-center text-caption">
          PT Rajawali Putra Logistik experienced in integrated logistics and
          transportation services, specializing in the delivery of goods, both
          locally and internationally throughout Indonesia
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

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
  {
    title: t("menu.tracking"),
    link: "/?tracking=focus",
  },
  {
    title: t("menu.privacyPolicy"),
    link: "/privacy-policy",
  },
]);
</script>
