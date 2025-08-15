<template>
  <v-row no-gutters justify="center" class="p-mobile">
    <v-col cols="12" sm="10" class="pt-sm-16">
      <div class="text-center text-sm-h3 text-h5 text-secondary mb-sm-16 mb-8">
        Company Values
      </div>

      <div class="d-flex flex-wrap gr-sm-16 gr-12">
        <div
          v-for="(item, i) in items"
          :key="item.img"
          class="d-flex flex-column ga-4 text-white w-sm-50 w-100"
          :class="gap(i)"
        >
          <v-img :src="item.img" class="mb-2"></v-img>

          <div class="text-sm-h6 ls-3 text-uppercase">
            {{ item.title }}
          </div>

          <div class="text-sm-h5 font-weight-light">
            {{ item.description }}
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const gap = (i: number) => {
  return i % 2 === 0 ? "pr-sm-5" : "pl-sm-5";
};

const items = [
  {
    img: "/images/about/About-4-1.jpg",
    title: "Integrity",
    description:
      "Consistent in applying actions, values, and methods in delivering its services.",
  },
  {
    img: "/images/about/About-4-2.jpg",
    title: "Proactive",
    description:
      "Continuously adapts new approaches to improve the quality of its services.",
  },
  {
    img: "/images/about/About-4-3.jpg",
    title: "Responsibility",
    description: "Responsible to stakeholders in carrying out its duties.",
  },
  {
    img: "/images/about/About-4-4.jpg",
    title: "Innovation",
    description:
      "Creative in its services to generate added value for all stakeholders.",
  },
];
</script>
