<template>
  <div class="bg-white p-mobile">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10" class="text-center">
        <div class="text-h5 text-sm-h3 text-primary mb-4">
          {{ contact?.content?.title }}
        </div>

        <div class="text-sm-h6 text-neutralSecondary mb-8">
          {{ contact?.content?.description }}
        </div>

        <v-row no-gutters justify="center">
          <v-col cols="12" sm="10">
            <v-row no-gutters class="gr-5 mb-5">
              <v-col cols="12" sm="6" class="pr-sm-5">
                <base-text-field
                  color="primary"
                  :placeholder="contact?.content?.placeholderName"
                ></base-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <base-text-field
                  color="primary"
                  :placeholder="contact?.content?.placeholderEmail"
                ></base-text-field>
              </v-col>

              <v-col cols="12">
                <base-text-field
                  color="primary"
                  :placeholder="contact?.content?.placeholderSubject"
                ></base-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  :placeholder="contact?.content?.placeholderMessage"
                  color="primary"
                  variant="outlined"
                  hide-details="auto"
                  class="custom-input"
                ></v-textarea>
              </v-col>
            </v-row>

            <div class="d-flex justify-center">
              <base-btn
                color="secondary"
                width="187"
                height="47"
                class="text-white font-weight-semibold"
              >
                {{ contact?.content?.btnContact }}
              </base-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const { fetchContact } = useContactStore();
const { contact } = toRefs(useContactStore());

const fetchData = async () => {
  const response = await fetchContact();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
