<template>
  <v-img src="/images/Landing-page-1.jpg" min-height="100vh" loading="eager">
    <div class="d-flex flex-column justify-center align-center ga-10 h-100">
      <div class="text-center text-white">
        <div class="text-h2 mb-5">Your Trusted Logistic Partner</div>

        <div class="text-h6 font-weight-light">
          Wherever your business begins, we help you go global
        </div>
      </div>

      <v-card color="#354254BF" rounded="xl" width="50%" class="px-4 py-6">
        <v-card-title
          class="text-white text-h6 font-weight-light text-center mb-2"
        >
          Track your order
        </v-card-title>

        <v-card-actions>
          <v-text-field
            placeholder="Enter container number"
            color="white"
            variant="solo"
            hide-details="auto"
            class="custom-input track-input"
          >
            <template #append-inner>
              <v-btn
                color="secondary"
                variant="flat"
                width="100"
                height="100%"
                :rounded="false"
                class="text-capitalize text-white text-subtitle-1 font-weight-bold"
              >
                Track
              </v-btn>
            </template>
          </v-text-field>
        </v-card-actions>
      </v-card>
    </div>
  </v-img>
</template>

<style lang="scss">
.track-input {
  .v-field--appended {
    padding-inline-end: 0;
  }
}
</style>
