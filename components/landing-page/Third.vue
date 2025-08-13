<template>
  <div class="py-16">
    <v-row no-gutters justify="center">
      <v-col cols="10" class="text-center">
        <div class="text-h3 text-primary mb-2">
          Driving your business growth for every business need
        </div>

        <div class="text-h6 text-neutralSecondary mb-16">
          Our service cover whatever your business industry
          <nuxt-link to="/" class="text-secondary"> learn more </nuxt-link>
        </div>

        <v-row no-gutters justify="center" align="start">
          <v-col
            v-for="item in items"
            :key="item.icon"
            cols="4"
            class="px-8 text-center d-flex flex-column align-center"
          >
            <v-img
              :src="item.icon"
              width="158"
              height="158"
              class="mb-8"
            ></v-img>

            <div class="text-h5 text-primary mb-1">
              {{ item.title }}
            </div>

            <div class="text-subtitle-2 text-neutralSecondary">
              {{ item.description }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    icon: "/images/Landing-Page-3-1.png",
    title: "Freight Forwarding",
    description:
      "Reliable in handling cargo shipping projects, supported by top-tier services, a well-equipped fleet, and a professional team",
  },
  {
    icon: "/images/Landing-Page-3-2.png",
    title: "Cargo Project",
    description:
      "Cargo delivery via land routes using standardized fleets, professional drivers, and guaranteed on-time delivery.",
  },
  {
    icon: "/images/Landing-Page-3-3.png",
    title: "Land Transportation",
    description:
      "Experienced in domestic cargo transportation, with shipping lines, agencies, and trucking partners.",
  },
];
</script>
