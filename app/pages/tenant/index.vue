<script setup lang="ts">
const event = useEvent();
const { data: randomID } = await useAsyncData(async () => Math.random().toString(36).substring(2, 15));

const url = useRequestURL();
</script>

<template>
  <div>
    <h1>Event: {{ event }}</h1>
    <NuxtLink :to="`/org/${randomID}`">Try to access org</NuxtLink>
    <NuxtLink to="http://localhost:3000">Go back to main site</NuxtLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>