<script setup lang="ts">
import { RouterLink } from "vue-router";
import Logo from "@/components/icons/Logo.vue";
import Theme from "@/components/icons/Theme.vue";
</script>

<template>
    <nav class="fixed z-50 flex w-full">
        <RouterLink :to="{ name: 'home' }">
            <div class="flex gap-4 p-8">
                <Logo class="h-8 w-8" />
                <h1 class="text-2xl font-bold leading-none text-charcoal transition-font dark:text-ice">checked</h1>
            </div>
        </RouterLink>
        <div class="flex w-full justify-end p-6 lg:hidden">
            <Theme />
        </div>
    </nav>
</template>

<style scoped></style>
