<template>
  <h1 class="text-center">{{ $t(route.meta.title ?? '') }}</h1>
</template>

<script setup lang="ts">
  const route = useRoute()
</script>
