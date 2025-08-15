<template>
  <v-row no-gutters justify="center" class="bg-background p-mobile">
    <v-col cols="12" sm="10" class="py-sm-16">
      <div class="text-center mb-16">
        <div class="text-sm-h3 text-h5 text-primary mb-4">
          Your trusted partner every step of the way
        </div>

        <div class="text-sm-h6 text-neutralSecondary">
          Our service cover your every logistic steps
        </div>
      </div>

      <v-row no-gutters justify="center" class="gr-8">
        <v-col
          v-for="step in steps"
          :key="step.icon"
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
              :src="step.icon"
              width="158"
              height="158"
              class="mb-8"
            ></v-img>

            <div class="text-h5 text-primary mb-2">
              {{ step.title }}
            </div>

            <div class="text-subtitle-2 text-neutralSecondary lh-20">
              {{ step.description }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const steps = [
  {
    icon: "/images/service/Service-2-1.png",
    title: "Packing",
    description: "Supporting your business growth at every stage",
  },
  {
    isDivider: true,
  },
  {
    icon: "/images/service/Service-2-2.png",
    title: "Delivery",
    description: "Supporting your business growth at every stage",
  },
  {
    isDivider: true,
  },
  {
    icon: "/images/service/Service-2-3.png",
    title: "Tracking",
    description: "Supporting your business growth at every stage",
  },
];
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
