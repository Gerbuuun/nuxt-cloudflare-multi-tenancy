<script lang="ts" setup>
const { data: randomID } = await useAsyncData(async () => Math.random().toString(36).substring(2, 15));
</script>

<template>
  <div>
    <h1>My Company</h1>
    <NuxtLink :to="`/org/${randomID}`">Random Org</NuxtLink>
    <NuxtLink :to="`/tenant`">Try to access tenant via path</NuxtLink>
    <NuxtLink to="http://event-1.localhost:3000">Try to access tenant via subdomain</NuxtLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>