<script setup lang="ts">
import { RouterLink } from "vue-router";
import Screenshot from "@/components/Screenshot.vue";
import Title from "@/components/Title.vue";
import Theme from "@/components/icons/Theme.vue";
</script>

<template>
    <!-- hero -->
    <div class="grid h-screen grid-rows-2 gap-16 p-16 xl:grid-cols-2 xl:grid-rows-3">
        <!-- blank -->
        <div class="hidden xl:flex"></div>
        <!-- screenshot -->
        <div class="-mx-14 -mt-14 xl:row-span-3 xl:m-0 xl:-mb-16 xl:-mr-16">
            <Screenshot class="xl:rounded-none xl:rounded-tl-3xl xl:border-b-0 xl:border-r-0" bg="bg-results-light" bgDark="dark:bg-results-dark" />
        </div>
        <!-- title -->
        <div class="flex flex-col gap-8 place-self-center">
            <Title desc="Split checks easier than ever with checked.">checked</Title>
            <div class="flex gap-4">
                <RouterLink :to="{ name: 'wizard' }">
                    <md-filled-button>Get started</md-filled-button>
                </RouterLink>
                <a href="#landing">
                    <md-outlined-button>Learn more</md-outlined-button>
                </a>
            </div>
        </div>
        <!-- theme toggle -->
        <div class="flex items-end justify-center">
            <Theme />
        </div>
    </div>
    <!-- landing -->
</template>

<style scoped></style>
