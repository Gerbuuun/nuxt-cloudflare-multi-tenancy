<script setup lang="ts">
const error = useError();
</script>

<template>
  <div>
    <h1>Error:</h1>
    <p>{{ error?.message }}</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
