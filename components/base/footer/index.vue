<template>
  <div>
    <base-footer-contact></base-footer-contact>

    <v-footer color="primary">
      <v-row
        no-gutters
        justify="center"
        class="py-6 text-white text-subtitle-2"
      >
        <v-col cols="10">
          <div class="d-flex justify-space-between align-center mb-4">
            <v-img
              src="/Logo-White.png"
              width="120"
              height="48"
              max-width="120"
              max-height="48"
            ></v-img>

            <div class="d-flex ga-6">
              <nuxt-link
                v-for="menu in menus"
                :key="menu.link"
                :to="menu.link"
                class="text-white"
                style="letter-spacing: 3px"
              >
                {{ menu.title }}
              </nuxt-link>
            </div>

            <div>© all rights reserved</div>
          </div>

          <div class="text-center text-caption">
            PT Rajawali Putra Logistik experienced in integrated logistics and
            transportation services, specializing in the delivery of goods, both
            locally and internationally throughout Indonesia
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
const menus = [
  {
    title: "ABOUT",
    link: "/about",
  },
  {
    title: "SERVICE",
    link: "/service",
  },
  {
    title: "CONTACT",
    link: "/contact",
  },
  {
    title: "TRACKING",
    link: "/tracking",
  },
  {
    title: "PRIVACY POLICY",
    link: "/privacy-policy",
  },
];
</script>
