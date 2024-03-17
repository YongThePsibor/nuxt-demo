<script setup>
import { useRoute } from '#imports';
const route = useRoute();

console.log('window.location.href', toRaw(route));
</script>

<template>
  <slot />
</template>

<style lang="less">
@import '../styles/index.less';
</style>
