<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    disable-resize-watcher
    color="primary"
  >
    <div class="d-flex flex-column align-center pa-5">
      <v-list-item
        v-for="(menu, i) in menus"
        :key="menu.link"
        :to="localePath(menu.link)"
        class="text-uppercase ls-3 opacity-100"
        variant="plain"
        color="secondary"
        :class="{ 'mb-4': i === menus.length - 1 }"
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

const localePath = useLocalePath();
const { menus } = useNavbar();

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
