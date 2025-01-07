<script lang="ts" setup>
const route = useRoute();
const orgID = toRef(() => route.params.id);
</script>

<template>
  <div>
    <h1>Org: {{ orgID }}</h1>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>