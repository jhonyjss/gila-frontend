<script setup lang="ts">
  import CategoryOptions from "./components/Categories/CategoryOptions.vue";
  import NotificationsOptions from "./components/Notifications/NotificationsOptions.vue";
  import MessageTextarea from "./components/Messages/MessageTextarea.vue";
  import TableLogs from "./components/Logs/TableLogs.vue";
</script>

<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div>
      <div class="mt-5">
        <CategoryOptions />
      </div>
      <div class="mt-5">
        <NotificationsOptions />
      </div>
      <div class="mt-5">
        <MessageTextarea />
      </div>

      <div class="mt-5">
        <TableLogs />
      </div>
    </div>
  </div>
</template>
