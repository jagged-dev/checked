<script setup lang="ts">
import Logo from "@/components/icons/Logo.vue";

const props = defineProps({ desc: String });
</script>

<template>
    <!-- title -->
    <div class="flex flex-col gap-8">
        <!-- heading -->
        <div class="flex gap-4">
            <Logo class="-ml-4 h-16 w-16 transition sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-24 xl:w-24 2xl:h-32 2xl:w-32 3xl:h-40 3xl:w-40" />
            <h1 class="text-4xl font-bold leading-none text-charcoal transition-font dark:text-ice sm:text-6xl md:text-8xl lg:text-10xl xl:text-6xl 2xl:text-8xl 3xl:text-10xl"><slot></slot></h1>
        </div>
        <!-- description -->
        <p class="font-bold text-gunmetal transition-font dark:text-silver sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl">{{ desc }}</p>
    </div>
</template>

<style scoped></style>
