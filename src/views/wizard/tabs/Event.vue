<script setup lang="ts">
import { ref, computed, onUpdated } from "vue";
import Input from "@/components/Input.vue";

const emit = defineEmits(["update:event", "update:validity"]);

const event = ref({
    name: "",
});

const valid = computed(() => {
    return event.value.name !== "";
});

onUpdated(() => {
    emit("update:event", event.value);
    emit("update:validity", valid.value);
});
</script>

<template>
    <!-- event -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xs:p-12">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ event.name || "New event" }}</h1>
        <!-- name -->
        <Input type="text" label="Event" icon="edit_calendar" v-model="event.name" />
    </div>
</template>

<style scoped></style>
