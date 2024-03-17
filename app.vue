<script setup>
const key = ref(0);
console.log('this is the app.vue, we should do some logic before routing, key');
const allUtils = new AllUtils();
console.log(allUtils);
</script>

<template>
  <NuxtLayout name="base">
    <NuxtPage :key="key" :transition="false" />
  </NuxtLayout>
</template>
