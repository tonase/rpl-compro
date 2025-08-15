<template>
  <privacy-policy></privacy-policy>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t("menu.privacyPolicy"),
});
</script>
