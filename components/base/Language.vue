<template>
  <v-menu location="bottom center">
    <template #activator="{ props, isActive }">
      <base-btn
        v-bind="props"
        variant="outlined"
        :color="color"
        :append-icon="`custom:${isActive ? 'chevronUp' : 'chevronDown'}`"
        class="text-caption"
      >
        <template #prepend>
          <v-img
            :src="selectedLanguage?.logo"
            width="16"
            height="16"
            rounded="circle"
            cover
            position="25%"
          ></v-img>
        </template>

        {{ selectedLanguage?.code }}
      </base-btn>
    </template>

    <v-card rounded="xl" class="mt-8">
      <v-card-text>
        <v-radio-group
          v-model="selectedLanguageCode"
          hide-details="auto"
          color="primary"
        >
          <v-radio
            v-for="language in languages"
            :key="language.lowerCode"
            :value="language.lowerCode"
            :label="language.description"
          >
          </v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: "white",
  },
});

const { selectedLanguage, selectedLanguageCode } = useLanguage();
const { fetchLanguages } = useLanguageStore();
const { languages } = toRefs(useLanguageStore());

const fetchData = async () => {
  const response = await fetchLanguages();

  if (!response.success) {
    toastResponse(response.success, response.message);
  }
};

onMounted(async () => {
  await nextTick();
  fetchData();
});
</script>
