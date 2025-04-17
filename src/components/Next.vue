<script setup lang="ts">
const props = defineProps({ label: String });
</script>

<template>
    <!-- next -->
    <button class="relative flex w-full flex-col gap-2 rounded-3xl bg-ice p-6 transition-background disabled:opacity-25 dark:bg-charcoal">
        <!-- label -->
        <div class="flex gap-2">
            <span class="font-bold text-gunmetal transition-font dark:text-silver">{{ label }}</span>
            <md-icon class="text-gunmetal transition-font dark:text-silver">arrow_right_alt</md-icon>
        </div>
        <!-- text -->
        <h1 class="text-start text-xl font-bold text-charcoal transition-font dark:text-ice"><slot></slot></h1>
        <!-- ripple -->
        <md-ripple></md-ripple>
    </button>
</template>

<style scoped></style>
