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
            :src="selectedLanguage.icon"
            width="16"
            height="16"
            rounded="circle"
            cover
            position="25%"
          ></v-img>
        </template>

        {{ selectedLanguage.shortLabel }}
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
            v-for="language in Language.values"
            :key="language.code"
            :value="language.code"
            :label="language.label"
          >
          </v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { Language } from "~/models/Language";

const props = defineProps({
  color: {
    type: String,
    default: "white",
  },
});

const { selectedLanguage, selectedLanguageCode } = useLanguage();
</script>
