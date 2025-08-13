<template>
  <v-btn class="text-capitalize" style="border-radius: 12px">
    <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
      <slot :key="name" :name="name" v-bind="slotProps"></slot>
    </template>
  </v-btn>
</template>
