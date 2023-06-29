<script setup lang="ts">
  import { all as AllCategories } from "@repository/categories.repo";
  import { watch, onMounted, ref } from "vue";
  import { ICategories } from "./ICategories.interface";
  import { useLogsStore } from "@/store/LogStore";

  let categories = ref<ICategories[]>([]);
  const checks = ref<ICategories[]>([]);

  const store = useLogsStore();
  watch(checks, (newQuestion: any) => {
    store.create({ categories: newQuestion });
  });
  onMounted(async () => {
    try {
      const response = await AllCategories();
      categories.value = response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  });
</script>

<template>
  <div className="form-control w-full">
    <div className="join">
      <input
        v-for="category in categories"
        :key="category.id"
        class="join-item btn"
        type="radio"
        name="categories"
        :value="category.id"
        :aria-label="category.name"
        v-model="checks"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
