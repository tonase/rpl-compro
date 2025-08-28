<template>
  <v-row no-gutters justify="center" class="bg-primary p-mobile">
    <v-col cols="12" sm="10" class="py-sm-16 d-flex flex-column ga-16">
      <div class="text-center text-white">
        <div class="text-sm-h3 text-h5 mb-4">
          {{ excellence?.title?.title }}
        </div>

        <div class="text-sm-h6">
          {{ excellence?.title?.description }}
        </div>
      </div>

      <div
        v-for="(item, i) in excellence?.contents"
        :key="i"
        class="d-flex flex-column justify-space-between align-center gr-6"
        :class="flexDir(i)"
      >
        <v-img
          :src="item.attachment"
          :width="imgWidth"
          :max-width="imgWidth"
          class="px-4"
        ></v-img>

        <div class="text-white px-4">
          <div class="text-sm-h6 ls-3 text-uppercase mb-sm-6 mb-4">
            {{ item.content?.title }}
          </div>

          <div class="text-sm-h5 font-weight-light">
            {{ item.content?.shortDescription }}
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { smAndDown } = useDisplay();
const { fetchExcellence } = useServiceStore();
const { excellence } = toRefs(useServiceStore());

const imgWidth = computed(() => {
  return smAndDown.value ? "100%" : "50%";
});

const fetchData = async () => {
  const response = await fetchExcellence();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};
const flexDir = (i: number) => {
  return i % 2 === 0 ? "flex-sm-row" : "flex-sm-row-reverse";
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
