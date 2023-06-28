<script setup lang="ts">
  import CategoryCard from "./components/CategoryCard.vue";
  console.log(import.meta.env);
</script>

<template>
  <div class="container mx-auto h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      <CategoryCard title="sports" />
      <CategoryCard title="sports" />
      <CategoryCard title="sports" />
    </div>
  </div>
</template>
