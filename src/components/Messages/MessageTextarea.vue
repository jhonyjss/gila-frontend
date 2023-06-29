<script setup lang="ts">
  import { create as createLog } from "@repository/logs.repo";
  import { ref } from "vue";
  import { useLogsStore } from "@/store/LogStore";
  import { toast } from "vue3-toastify";
  import { findOne } from "@repository/users.repo";

  const message = ref<string>("");
  const store = useLogsStore();

  const handleSubmit = async () => {
    store.create({ message: message.value });
    const response = await createLog({ ...store.getLogs });
    const { data } = await findOne(import.meta.env.VITE_APP_USERID);
    store.savedLogs(data);

    if (response) {
      console.log(store);
      toast.success(`Your message was sent !`, {
        autoClose: 1000
      });
    }

    message.value = "";
  };
</script>

<template>
  <div class="flex flex-col">
    <textarea
      v-model="message"
      class="textarea textarea-primary w-full"
      placeholder="Write your messa"
    ></textarea>

    <button
      @click="handleSubmit()"
      :disabled="message.length ? false : true"
      class="btn btn-secondary mt-6"
    >
      SEND
    </button>
  </div>
</template>
