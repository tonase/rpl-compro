<template>
  <v-row no-gutters justify="center" class="p-mobile">
    <v-col cols="12" sm="10" class="pt-sm-16">
      <div class="text-center text-sm-h3 text-h5 text-secondary mb-sm-16 mb-8">
        {{ companyValue?.title?.title }}
      </div>

      <div class="d-flex flex-wrap gr-sm-16 gr-12">
        <div
          v-for="(item, i) in companyValue?.contents"
          :key="i"
          class="d-flex flex-column ga-4 text-white w-sm-50 w-100"
          :class="gap(i)"
        >
          <v-img :src="item.attachment" max-height="276" class="mb-2"></v-img>

          <div class="text-sm-h6 ls-3 text-uppercase">
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
const { fetchCompanyValue } = useAboutStore();
const { companyValue } = toRefs(useAboutStore());

const fetchData = async () => {
  const response = await fetchCompanyValue();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};
const gap = (i: number) => {
  return i % 2 === 0 ? "pr-sm-5" : "pl-sm-5";
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
