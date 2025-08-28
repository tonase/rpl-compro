<template>
  <v-row no-gutters justify="center" class="p-mobile">
    <v-col cols="12" sm="10">
      <div class="d-flex flex-column ga-2 ga-sm-4 py-sm-16 py-8">
        <v-img :src="vision?.attachment" class="mb-2"></v-img>

        <div class="text-h6 text-sm-h4 text-secondary">
          {{ vision?.vision_title?.title }}
        </div>

        <ul class="text-sm-h6 text-white font-weight-light ml-6">
          <li v-for="(item, i) in vision?.vision_items?.items" :key="i">
            {{ item.title }}
          </li>
        </ul>
      </div>

      <div class="d-flex flex-column ga-2 ga-sm-4 py-sm-16 py-8">
        <v-img :src="mission?.attachment" class="mb-2"></v-img>

        <div class="text-h6 text-sm-h4 text-secondary">
          {{ mission?.vision_title?.title }}
        </div>

        <ul class="text-sm-h6 text-white font-weight-light ml-6">
          <li v-for="(item, i) in mission?.vision_items?.items" :key="i">
            {{ item.title }}
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { fetchVision, fetchMission } = useAboutStore();
const { vision, mission } = toRefs(useAboutStore());

const fetchData = async () =>
  Promise.all([await fetchVision(), await fetchMission()]).then((values) => {
    values.forEach(
      (value) => !value.success && toastResponse(value.success, value.message)
    );
  });

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
