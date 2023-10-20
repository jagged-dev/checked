<script setup lang="ts">
import { ref, onUpdated } from "vue";
import Input from "@/components/Input.vue";

const emit = defineEmits(["update:event"]);

const event = ref({
    name: "",
});

onUpdated(() => {
    emit("update:event", event.value);
});
</script>

<template>
    <!-- event -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-12 transition-background dark:bg-charcoal">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ event.name || "New event" }}</h1>
        <!-- name -->
        <Input type="text" label="Event" icon="edit_calendar" :value="event.name" @update:value="(value: string) => (event.name = value)" />
    </div>
</template>

<style scoped></style>
