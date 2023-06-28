<script setup lang="ts">
  import CategoryCard from "./components/Categories/CategoryCard.vue";
  import { onBeforeMount, ref } from "vue";
  import { all as allCategories } from "@repository/categories.repo";
  import { ICategories } from "./components/Categories/ICategories.interface";

  let categories = ref<ICategories[]>([]);

  onBeforeMount(async () => {
    try {
      const response = await allCategories();
      categories.value = response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  });
</script>

<template>
  <div class="container mx-auto h-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      <CategoryCard v-for="category in categories" :title="category.name" />
    </div>
  </div>
</template>
