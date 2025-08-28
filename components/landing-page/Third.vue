<template>
  <div class="p-mobile">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10" class="text-center">
        <div class="text-h5 text-sm-h3 text-primary mb-2">
          {{ service?.title?.title }}
        </div>

        <div class="text-sm-h6 text-neutralSecondary mb-16">
          {{ service?.title?.description }}
          <nuxt-link to="/service" class="text-secondary">
            learn more
          </nuxt-link>
        </div>

        <v-row no-gutters justify="center" align="start" class="gr-16">
          <v-col
            v-for="(item, i) in service?.services"
            :key="i"
            cols="12"
            sm="4"
            class="px-8 text-center d-flex flex-column align-center"
          >
            <v-img
              :src="item.attachment"
              width="158"
              height="158"
              class="mb-8"
            ></v-img>

            <div class="text-h5 text-primary mb-1">
              {{ item.content?.title }}
            </div>

            <div class="text-subtitle-2 text-neutralSecondary">
              {{ item.content?.shortDescription }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const { fetchService } = useHomeStore();
const { service } = toRefs(useHomeStore());

const fetchData = async () => {
  const response = await fetchService();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
