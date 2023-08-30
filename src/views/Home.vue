<script setup lang="ts">
import { RouterLink } from "vue-router";
import Screenshot from "@/components/Screenshot.vue";
import Title from "@/components/Title.vue";
import Theme from "@/components/icons/Theme.vue";
</script>

<template>
    <div class="grid h-screen grid-rows-3 gap-8 p-8 xl:grid-cols-2 xl:gap-16 xl:p-16">
        <!-- blank -->
        <div></div>
        <!-- screenshot -->
        <div class="row-span-3 -mb-16 -mr-16 hidden xl:flex">
            <Screenshot class="rounded-none rounded-tl-3xl border-b-0 border-r-0" bg="bg-results-light" bgDark="dark:bg-results-dark" />
        </div>
        <!-- title -->
        <div class="flex flex-col gap-8 place-self-center">
            <Title desc="Split checks easier than ever with checked.">checked</Title>
            <div class="flex gap-4">
                <RouterLink :to="{ name: 'wizard' }">
                    <md-filled-button>Get started</md-filled-button>
                </RouterLink>
                <RouterLink :to="{ name: 'learn' }">
                    <md-outlined-button>Learn more</md-outlined-button>
                </RouterLink>
            </div>
        </div>
        <!-- theme toggle -->
        <div class="flex items-end justify-center">
            <Theme />
        </div>
    </div>
</template>

<style scoped></style>
