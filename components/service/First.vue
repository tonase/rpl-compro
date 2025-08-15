<template>
  <v-row no-gutters justify="end" class="bg-white py-container">
    <v-col cols="12" sm="11" class="p-mobile">
      <div
        class="d-flex flex-column flex-sm-row justify-space-between align-center ga-10"
      >
        <div
          class="d-flex flex-column ga-8 text-h6 font-weight-light text-neutralSecondary"
        >
          <div class="text-h4 text-primary">
            Driving your business growth for every business need
          </div>

          <div>
            PT. Rajawali Putra Logistik is a company focused on providing
            integrated logistics and transportation services for goods delivery
            throughout Indonesia. In line with the company’s vision andt
            mission, it remains committed to delivering the best service,
            emphasizing professionalism in its operations to achieve sustainable
            growth and meet stakeholder expectations.
          </div>

          <div>
            The company is ready to compete in the logistics transportation
            industry and provide the best solutions to meet customer needs and
            expectations.
          </div>
        </div>

        <v-img src="/images/service/Service-1-1.png" :width="imgWidth"></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { smAndDown } = useDisplay();

const imgWidth = computed(() => {
  return smAndDown.value ? "100%" : "50%";
});
</script>
