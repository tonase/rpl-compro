<template>
  <v-row no-gutters justify="center" class="bg-background p-mobile">
    <v-col cols="12" sm="10" class="py-sm-16">
      <div class="text-center mb-16">
        <div class="text-sm-h3 text-h5 text-primary mb-4">
          {{ logisticStep?.title?.title }}
        </div>

        <div class="text-sm-h6 text-neutralSecondary">
          {{ logisticStep?.title?.description }}
        </div>
      </div>

      <v-row no-gutters justify="center" class="gr-8">
        <v-col
          v-for="(step, i) in steps"
          :key="i"
          cols="12"
          sm="2"
          class="position-relative"
        >
          <v-divider
            v-if="step.isDivider"
            :thickness="2"
            class="divider"
          ></v-divider>

          <div v-else class="d-flex flex-column align-center text-center">
            <v-img
              :src="step.attachment"
              width="158"
              height="158"
              class="mb-8"
            ></v-img>

            <div class="text-h5 text-primary mb-2">
              {{ step.content?.title }}
            </div>

            <div class="text-subtitle-2 text-neutralSecondary lh-20">
              {{ step.content?.shortDescription }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { ServiceItem } from "~/models/ServiceItem";

const { fetchLogisticStep } = useServiceStore();
const { logisticStep } = toRefs(useServiceStore());

const steps = computed(() => {
  return logisticStep.value?.contents?.flatMap((item, idx, arr) =>
    idx < arr.length - 1 ? [item, { isDivider: true }] : [item]
  ) as (ServiceItem & { isDivider: boolean })[];
});

const fetchData = async () => {
  const response = await fetchLogisticStep();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>

<style scoped lang="scss">
.divider {
  width: 0;

  position: absolute;
  top: 30%;
  left: -5%;

  @media (min-width: 1024px) {
    width: 110%;
  }
}
</style>
