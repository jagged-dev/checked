<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <main class="bg-ice dark:bg-charcoal">
        <div class="grid h-screen w-full grid-cols-2 gap-16 p-16">
            <!-- intro -->
            <div class="flex flex-col gap-8 place-self-center">
                <!-- title -->
                <div class="flex gap-4">
                    <svg class="ml-[-1rem] h-40 w-40 text-blue"><use xlink:href="/assets/images/icons/icons.svg#logo" /></svg>
                    <h1 class="text-10xl font-bold leading-none text-charcoal dark:text-ice">Checked</h1>
                </div>
                <!-- description -->
                <p class="text-2xl font-bold text-gunmetal dark:text-silver">Split checks easier than ever with Checked.</p>
                <!-- nav buttons -->
                <div class="flex gap-4">
                    <RouterLink :to="{ name: 'wizard' }">
                        <md-filled-button><b>Get Started</b></md-filled-button>
                    </RouterLink>
                    <a href="#learnMore">
                        <md-elevated-button><b>Learn More</b></md-elevated-button>
                    </a>
                </div>
            </div>
            <!-- screenshot -->
            <div class="mb-[-4rem] mr-[-4rem]">
                <div class="h-full w-full rounded-tl-3xl border-l-8 border-t-8 border-gunmetal border-opacity-25 bg-summary-light bg-cover bg-clip-content dark:border-silver dark:border-opacity-25 dark:bg-summary-dark"></div>
            </div>
        </div>

        <!-- todo -->
        <div class="flex h-screen w-full items-center justify-center" id="learnMore">
            <h1 class="text-10xl font-bold text-charcoal dark:text-ice">Learn More</h1>
        </div>
    </main>
</template>

<style scoped></style>
