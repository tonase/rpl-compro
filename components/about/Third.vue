<template>
  <v-sheet color="#2A3644" class="p-mobile">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10" class="text-center text-secondary">
        <div class="text-sm-h3 text-h5 mb-sm-10 mb-5">
          {{ body?.content?.title }}
        </div>

        <div class="text-sm-h5 font-weight-light">
          {{ body?.content?.description }}
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
const { fetchBody } = useAboutStore();
const { body } = toRefs(useAboutStore());

const fetchData = async () => {
  const response = await fetchBody();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
