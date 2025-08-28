<template>
  <div class="bg-tertiary p-mobile">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10" class="text-center">
        <div class="text-sm-h6 text-primary mb-6">
          {{ trackRecord?.title?.title }}
        </div>

        <div
          v-for="(record, i) in trackRecord?.trackRecord"
          :key="i"
          class="d-flex justify-center text-primary ga-16 mb-6 mb-sm-12"
        >
          <div class="d-flex flex-column justify-center mx-sm-10">
            <div class="text-h3 text-sm-h1 font-weight-semibold">
              {{ record.awardsReceivedTotal }}
            </div>

            <div class="text-sm-h6">
              {{ record.awardsReceived }}
            </div>
          </div>

          <div class="d-flex flex-column justify-center mx-sm-10">
            <div class="text-h3 text-sm-h1 font-weight-semibold">
              {{ record.packagesCarriedTotal }}
            </div>

            <div class="text-sm-h6">
              {{ record.packagesCarried }}
            </div>
          </div>
        </div>

        <div class="text-sm-h6 text-neutralSecondary mb-6 mb-sm-12">
          {{ client?.title?.title }}
        </div>

        <v-row no-gutters justify="center" align="center" class="ga-5">
          <v-col v-for="(item, i) in client?.images" :key="i" cols="2">
            <v-img :src="item.image"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const { fetchTrackRecord, fetchClient } = useHomeStore();
const { trackRecord, client } = toRefs(useHomeStore());

const fetchData = async () =>
  Promise.all([await fetchTrackRecord(), await fetchClient()]).then(
    (values) => {
      values.forEach(
        (value) => !value.success && toastResponse(value.success, value.message)
      );
    }
  );

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
