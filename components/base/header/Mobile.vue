<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    disable-resize-watcher
    color="primary"
  >
    <div class="d-flex flex-column align-center pa-5">
      <v-list-item
        v-for="menu in menus"
        :key="menu.link"
        :to="localePath(menu.link)"
        class="text-uppercase ls-3 opacity-100"
        variant="plain"
        color="secondary"
      >
        {{ menu.title }}
      </v-list-item>

      <base-language></base-language>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

const { t } = useI18n();
const localePath = useLocalePath();

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
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
