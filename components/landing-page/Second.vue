<template>
  <div class="bg-primary p-mobile">
    <v-row no-gutters align="center">
      <v-col cols="12" sm="6">
        <v-img :src="why?.attachment"></v-img>
      </v-col>

      <v-col cols="12" sm="4" class="d-flex flex-column ga-6">
        <div class="text-h5 text-sm-h3 text-secondary">
          {{ why?.content?.title }}
        </div>

        <div
          v-html="why?.content?.shortDescription"
          class="text-sm-h5 font-weight-light"
        ></div>

        <nuxt-link to="/about" class="text-secondary text-sm-h5">
          Learn more about RPL
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const { fetchWhy } = useHomeStore();
const { why } = toRefs(useHomeStore());

const fetchData = async () => {
  const response = await fetchWhy();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
