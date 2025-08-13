<template>
  <div class="bg-tertiary py-16">
    <v-row no-gutters justify="center">
      <v-col cols="10" class="text-center">
        <div class="text-h6 text-primary mb-6">
          Moving your business forward, with our proven track record
        </div>

        <div class="d-flex justify-center text-primary ga-16 mb-12">
          <div class="d-flex flex-column justify-center mx-10">
            <div class="text-h1 font-weight-semibold">1.246+</div>

            <div class="text-h6">awards received</div>
          </div>

          <div class="d-flex flex-column justify-center mx-10">
            <div class="text-h1 font-weight-semibold">2.638+</div>

            <div class="text-h6">packages carried</div>
          </div>
        </div>

        <div class="text-h6 text-neutralSecondary mb-12">
          and trusted by leading clients nationwide.
        </div>

        <v-row no-gutters justify="center" align="center" class="ga-5">
          <v-col v-for="item in items" :key="item.src" cols="2">
            <v-img
              :src="item.src"
              :width="item.width"
              :height="item.height"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    src: "/images/fourth/argha.png",
    width: 130,
    height: 65,
  },
  {
    src: "/images/fourth/arnotts.png",
    width: 140,
    height: 50,
  },
  {
    src: "/images/fourth/bisi.png",
    width: 170,
    height: 50,
  },
  {
    src: "/images/fourth/deltamas.png",
    width: 73,
    height: 73,
  },
  {
    src: "/images/fourth/gpi.png",
    width: 208,
    height: 35,
  },
  {
    src: "/images/fourth/hextar.png",
    width: 105,
    height: 62,
  },
  {
    src: "/images/fourth/jadimas.png",
    width: 135,
    height: 70,
  },
  {
    src: "/images/fourth/mayora.png",
    width: 137,
    height: 77,
  },
  {
    src: "/images/fourth/ksni.png",
    width: 129,
    height: 73,
  },
  {
    src: "/images/fourth/kl.png",
    width: 148,
    height: 38,
  },
  {
    src: "/images/fourth/cfi.png",
    width: 105,
    height: 86,
  },
  {
    src: "/images/fourth/pos.png",
    width: 99,
    height: 90,
  },
  {
    src: "/images/fourth/cpi.png",
    width: 140,
    height: 94,
  },
  {
    src: "/images/fourth/wings.png",
    width: 101,
    height: 60,
  },
  {
    src: "/images/fourth/telkom.png",
    width: 174,
    height: 58,
  },
];
</script>
