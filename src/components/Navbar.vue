<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="fixed flex w-full p-8">
        <RouterLink :to="{ name: 'home' }">
            <div class="flex gap-4">
                <svg class="h-8 w-8 text-blue"><use xlink:href="/assets/images/icons/icons.svg#logo" /></svg>
                <h1 class="text-2xl font-bold leading-none text-charcoal transition-font dark:text-ice">checked</h1>
            </div>
        </RouterLink>
    </nav>
</template>

<style scoped></style>
