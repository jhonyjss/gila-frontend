<script setup lang="ts">
  defineProps<{ title: string }>();
</script>

<template>
  <div className="card bg-base-100 shadow-xl border-2 border-indigo-500">
    <div className="flex justify-center items-center card-body text-slate-700 text-center">
      <h2 className="card-title uppercase text-1xl">{{ title }}</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
