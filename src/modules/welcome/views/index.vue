<template>
  <h1>{{ $t(route.meta.title ?? '') }}</h1>
</template>

<script setup lang="ts">
  const route = useRoute()
</script>
