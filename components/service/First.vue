<template>
  <v-row no-gutters justify="end" class="bg-white py-container">
    <v-col cols="12" sm="11" class="p-mobile">
      <div
        class="d-flex flex-column flex-sm-row justify-space-between align-center ga-10"
      >
        <div
          class="d-flex flex-column ga-8 text-h6 font-weight-light text-neutralSecondary"
        >
          <div class="text-h4 text-primary">
            {{ title?.title?.title }}
          </div>

          <div v-html="title?.title?.shortDescription"></div>
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
const { fetchTitle } = useServiceStore();
const { title } = toRefs(useServiceStore());

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
