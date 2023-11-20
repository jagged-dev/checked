<script setup lang="ts">
import { ref, computed, onUpdated } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import Input from "@/components/Input.vue";

const emit = defineEmits(["update:event", "update:validity"]);

const event = ref("");
const touched = ref(false);
const left = ref(false);

const valid = computed(() => {
    return event.value !== "";
});

onUpdated(() => {
    emit("update:event", event.value);
    emit("update:validity", valid.value);
});

onBeforeRouteLeave((to, from) => {
    left.value = true;
});
</script>

<template>
    <!-- event -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:p-12">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ event || "New event" }}</h1>
        <!-- name -->
        <Input type="text" label="Event" icon="edit_calendar" error-text="Event name is required." :error="(touched || left) && event === ''" v-model="event" @input="touched = true" />
    </div>
</template>

<style scoped></style>
