<script setup lang="ts">
  import { all as AllNotifications } from "@repository/notifications.repo";
  import { onMounted, ref, watch } from "vue";
  import { INotifications } from "./INotifications.interface";
  import { useLogsStore } from "@/store/LogStore";

  let notifications = ref<INotifications[]>([]);
  const checks = ref<string>();

  const store = useLogsStore();
  watch(checks, (newQuestion: any) => {
    store.create({ notifications: newQuestion });
  });
  onMounted(async () => {
    try {
      const response = await AllNotifications();
      notifications.value = response.data;
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  });
</script>

<template>
  <div className="form-control w-full">
    <div className="join">
      <input
        v-for="notification in notifications"
        :key="notification.id"
        class="join-item btn"
        type="radio"
        name="notifications"
        :value="notification.id"
        :aria-label="notification.name"
        v-model="checks"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
