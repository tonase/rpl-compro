<template>
  <v-dialog v-model="dialog" width="auto" scroll-strategy="none">
    <v-card color="#354254EB" width="712" rounded="lg">
      <div class="d-flex justify-end pa-2">
        <base-btn
          icon="custom:close"
          variant="text"
          color="neutralSecondary"
          @click="closeDialog"
        ></base-btn>
      </div>

      <div class="text-center text-white mb-8">
        <div class="text-h3 mb-2">Welcome</div>

        <div>
          Login to your given account or
          <nuxt-link to="/contact" class="text-secondary">
            contact us
          </nuxt-link>
          to set it for you
        </div>
      </div>

      <div class="d-flex flex-column align-center ga-4">
        <base-text-field
          variant="solo"
          placeholder="Enter email address"
          width="50%"
        ></base-text-field>

        <base-text-field
          variant="solo"
          placeholder="Enter password"
          width="50%"
        ></base-text-field>

        <base-btn
          color="secondary"
          width="116"
          height="48"
          class="mt-4 mb-16 text-white"
        >
          Login
        </base-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const { dialog, closeDialog } = useLoginDialog();
</script>
