<script setup lang="ts">
import { RouterLink } from "vue-router";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

const props = defineProps({
    amounts: Object,
    party: Object,
    food: Object,
    tab: Number,
});
</script>

<template>
    <h1 class="text-3xl font-bold leading-none text-charcoal transition-font dark:text-ice">Results</h1>

    <div class="flex flex-col gap-8">
        <span>Amounts: {{ amounts }}</span>
        <span>Party: {{ party }}</span>
        <span>Food: {{ food }}</span>
    </div>

    <!-- nav buttons -->
    <div class="grid gap-4 lg:grid-cols-2">
        <Back label="Previous" @click="$emit('switch:tab', tab! - 1)">Food</Back>
        <RouterLink :to="{ name: 'home' }">
            <Next label="Finish">Home</Next>
        </RouterLink>
    </div>
</template>

<style scoped></style>
