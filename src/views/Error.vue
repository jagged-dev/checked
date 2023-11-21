<script setup lang="ts">
import { RouterLink } from "vue-router";
import Four from "@/components/icons/Four.vue";
import Logo from "@/components/icons/Logo.vue";
</script>

<template>
    <!-- error -->
    <div class="flex h-full flex-col items-center justify-center gap-16">
        <!-- 404 -->
        <div class="flex">
            <Four class="h-28 w-28 transition sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-60 xl:w-60 2xl:h-72 2xl:w-72" />
            <Logo class="h-28 w-28 transition sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-60 xl:w-60 2xl:h-72 2xl:w-72" />
            <Four class="h-28 w-28 transition sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-60 xl:w-60 2xl:h-72 2xl:w-72" />
        </div>
        <!-- message -->
        <div class="flex flex-col items-center gap-4">
            <p class="text-lg font-bold text-charcoal transition-font dark:text-ice sm:text-xl">The requested page could not be found.</p>
            <p class="text-gunmetal transition-font dark:text-silver">
                Try a different URL or head back to the
                <RouterLink :to="{ name: 'home' }">
                    <b class="text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue">Home</b>
                </RouterLink>
                page.
            </p>
        </div>
    </div>
</template>

<style scoped></style>
