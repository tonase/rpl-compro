<template>
  <v-dialog v-model="dialog" width="auto" scroll-strategy="none">
    <v-card color="#354254EB" :width="cardWidth" rounded="lg">
      <div class="d-flex justify-end pa-2">
        <base-btn
          icon="custom:close"
          variant="text"
          color="neutralSecondary"
          @click="closeDialog"
        ></base-btn>
      </div>

      <div class="text-center text-white mb-8 px-5">
        <div class="text-h5 text-sm-h3 mb-2">
          {{ formLogin?.content?.title }}
        </div>

        <div>
          {{ formLogin?.content?.description }}
        </div>
      </div>

      <div class="d-flex flex-column align-center ga-4 px-5">
        <base-text-field
          variant="solo"
          :placeholder="formLogin?.content?.placeholderEmail"
          :width="fieldWidth"
        ></base-text-field>

        <base-text-field
          variant="solo"
          :placeholder="formLogin?.content?.placeholderPassword"
          :width="fieldWidth"
        ></base-text-field>

        <base-btn
          color="secondary"
          width="116"
          height="48"
          class="mt-4 mb-16 text-white"
        >
          {{ formLogin?.content?.btnLogin }}
        </base-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const { smAndDown } = useDisplay();
const { dialog, closeDialog } = useLoginDialog();
const { fetchFormLogin } = useLoginStore();
const { formLogin } = toRefs(useLoginStore());

const cardWidth = computed(() => {
  return smAndDown.value ? "100%" : "712";
});
const fieldWidth = computed(() => {
  return smAndDown.value ? "100%" : "50%";
});

const fetchData = async () => {
  const response = await fetchFormLogin();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
