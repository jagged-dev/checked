<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <!-- footer -->
    <div class="mt-auto flex flex-wrap gap-y-8 p-8 pt-0">
        <!-- divider -->
        <md-divider></md-divider>
        <!-- pages -->
        <div class="flex w-full justify-center gap-4 xl:order-2 xl:w-1/2 xl:justify-end">
            <RouterLink :to="{ name: 'about' }">
                <span class="text-md font-bold text-gunmetal transition-font hover:text-blue dark:text-silver dark:hover:text-blue">About</span>
            </RouterLink>
            <RouterLink :to="{ name: 'contact' }">
                <span class="text-md font-bold text-gunmetal transition-font hover:text-blue dark:text-silver dark:hover:text-blue">Contact</span>
            </RouterLink>
            <RouterLink :to="{ name: 'privacy' }">
                <span class="text-md font-bold text-gunmetal transition-font hover:text-blue dark:text-silver dark:hover:text-blue">Privacy</span>
            </RouterLink>
        </div>
        <!-- brand -->
        <div class="flex w-full justify-center gap-2 xl:order-1 xl:w-1/2 xl:justify-start">
            <span class="font-['SF_Pro'] font-bold text-gunmetal transition-font dark:text-silver">&copy;</span>
            <h1 class="font-bold text-gunmetal transition-font dark:text-silver">jagged creations</h1>
        </div>
    </div>
</template>

<style scoped></style>
