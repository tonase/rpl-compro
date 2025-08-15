<template>
  <v-app>
    <base-header @toggle-drawer="drawer = !drawer"></base-header>
    <base-header-mobile v-model="drawer"></base-header-mobile>
    <slot></slot>
    <base-footer></base-footer>
    <login-dialog></login-dialog>
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(false);
</script>
