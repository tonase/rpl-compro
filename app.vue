<template>
  <nuxt-layout>
    <nuxt-page></nuxt-page>
  </nuxt-layout>
</template>

<script setup lang="ts">
const { locale } = useI18n();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - RPL` : "RPL";
  },
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>
