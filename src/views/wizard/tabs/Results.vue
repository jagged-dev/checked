<script setup lang="ts">
import { ref, onActivated } from "vue";
import Input from "@/components/Input.vue";

const props = defineProps({
    event: Object,
    party: Array<string>,
    amounts: Object,
    food: Array<any>,
});

const results = ref();

onActivated(() => {});
</script>

<template>
    <!-- heading -->
    <h1 class="text-3xl font-bold leading-none text-charcoal transition-font dark:text-ice">{{ event?.name }}</h1>
    <!-- results -->
    <div class="flex flex-col gap-4">
        <span>{{ event }}</span>
        <span>{{ party }}</span>
        <span>{{ amounts }}</span>
        <span>{{ food }}</span>
        <span>{{ results }}</span>
    </div>
</template>

<style scoped></style>
