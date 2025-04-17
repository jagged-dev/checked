<script setup lang="ts">
const props = defineProps({ label: String });
</script>

<template>
    <!-- back -->
    <button class="relative flex w-full flex-col gap-2 rounded-3xl bg-ice p-6 transition-background disabled:opacity-25 dark:bg-charcoal">
        <!-- label -->
        <div class="flex gap-2">
            <md-icon class="text-gunmetal transition-font dark:text-silver">arrow_left_alt</md-icon>
            <span class="font-bold text-gunmetal transition-font dark:text-silver">{{ label }}</span>
        </div>
        <!-- text -->
        <h1 class="text-start text-xl font-bold text-charcoal transition-font dark:text-ice"><slot></slot></h1>
        <!-- ripple -->
        <md-ripple></md-ripple>
    </button>
</template>

<style scoped></style>
