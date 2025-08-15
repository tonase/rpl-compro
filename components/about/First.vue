<template>
  <v-row no-gutters justify="end" class="p-mobile">
    <v-col cols="12" sm="11">
      <div
        class="d-flex flex-column flex-sm-row justify-space-between align-center gap"
      >
        <div>
          <div class="text-h6 text-sm-h4 text-secondary mb-sm-8 mb-4">
            Integrated logistics and transportation services throughout
            Indonesia
          </div>

          <div class="text-sm-h6 text-white font-weight-light">
            PT. Rajawali Putra Logistik is a company focused on providing
            integrated logistics and transportation services for goods delivery
            throughout Indonesia. In line with the company’s vision andt
            mission, it remains committed to delivering the best service,
            emphasizing professionalism in its operations to achieve sustainable
            growth and meet stakeholder expectations.
          </div>
        </div>

        <v-img src="/images/about/About-1.jpg" :width="imgWidth"></v-img>
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

<style lang="scss" scoped>
.gap {
  gap: 32px;

  @media (min-width: 1024px) {
    gap: 100px;
  }
}
</style>
