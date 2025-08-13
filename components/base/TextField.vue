<template>
  <v-text-field
    :variant="variant"
    hide-details="auto"
    class="custom-input"
  ></v-text-field>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as PropType<
      | "outlined"
      | "filled"
      | "plain"
      | "underlined"
      | "solo"
      | "solo-inverted"
      | "solo-filled"
    >,
    default: "outlined",
    required: false,
  },
});
</script>
