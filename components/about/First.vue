<template>
  <v-row no-gutters justify="end" class="p-mobile">
    <v-col cols="12" sm="11">
      <div
        class="d-flex flex-column flex-sm-row justify-space-between align-center gap"
      >
        <div>
          <div class="text-h6 text-sm-h4 text-secondary mb-sm-8 mb-4">
            {{ title?.title?.title }}
          </div>

          <div
            v-html="title?.title?.shortDescription"
            class="text-sm-h6 text-white font-weight-light"
          ></div>
        </div>

        <v-img
          :src="title?.attachment"
          :width="imgWidth"
          :max-width="imgWidth"
        ></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { smAndDown } = useDisplay();
const { fetchTitle } = useAboutStore();
const { title } = toRefs(useAboutStore());

const imgWidth = computed(() => {
  return smAndDown.value ? "100%" : "50%";
});

const fetchData = async () => {
  const response = await fetchTitle();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>

<style lang="scss" scoped>
.gap {
  gap: 32px;

  @media (min-width: 1024px) {
    gap: 100px;
  }
}
</style>
