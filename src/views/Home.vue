<script setup lang="ts">
import { RouterLink } from "vue-router";
import Title from "@/components/Title.vue";
import Theme from "@/components/icons/Theme.vue";
import Screenshot from "@/components/Screenshot.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
    <!-- hero -->
    <div class="grid h-screen grid-rows-3 gap-8 p-8 xs:gap-16 xs:p-16 xl:grid-cols-2">
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
                <a href="#learn">
                    <md-filled-tonal-button>Learn more</md-filled-tonal-button>
                </a>
            </div>
        </div>
        <!-- theme toggle -->
        <div class="flex items-end justify-center">
            <Theme />
        </div>
    </div>
    <!-- learn more -->
    <div class="flex flex-col rounded-t-3xl bg-snow transition-background duration-500 dark:bg-coal xl:rounded-tr-none">
        <div class="grid items-center gap-8 p-8 xs:gap-16 xs:p-16 xl:grid-cols-2" id="learn">
            <!-- amounts -->
            <div class="flex flex-col gap-4">
                <div class="ml-2 flex flex-col">
                    <h1 class="text-xl font-bold text-gunmetal transition-font dark:text-silver">Step 1</h1>
                    <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Enter check amounts</h1>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Enter subtotal amount</p>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Enter tax amount</p>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Enter tip amount</p>
                </div>
            </div>
            <div class="h-screen/2 xl:-m-16 xl:h-screen xl:p-16 xl:pr-0">
                <Screenshot class="xl:rounded-r-none xl:border-r-0" bg="bg-amounts-light" bgDark="dark:bg-amounts-dark" />
            </div>
            <!-- party -->
            <div class="flex flex-col gap-4">
                <div class="ml-2 flex flex-col">
                    <h1 class="text-xl font-bold text-gunmetal transition-font dark:text-silver">Step 2</h1>
                    <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Enter party guests</h1>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Enter guest name</p>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Optionally enter guest email</p>
                </div>
            </div>
            <div class="h-screen/2 xl:-m-16 xl:h-screen xl:p-16 xl:pr-0">
                <Screenshot class="xl:rounded-r-none xl:border-r-0" bg="bg-party-light" bgDark="dark:bg-party-dark" />
            </div>
            <!-- food -->
            <div class="flex flex-col gap-4">
                <div class="ml-2 flex flex-col">
                    <h1 class="text-xl font-bold text-gunmetal transition-font dark:text-silver">Step 3</h1>
                    <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Enter food items</h1>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Enter item name</p>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Enter item price</p>
                </div>
                <div class="rounded-3xl bg-ice p-6 transition-background dark:bg-charcoal">
                    <p class="font-bold text-gunmetal transition-font dark:text-silver">Enter item guests</p>
                </div>
            </div>
            <div class="h-screen/2 xl:-m-16 xl:h-screen xl:p-16 xl:pr-0">
                <Screenshot class="xl:rounded-r-none xl:border-r-0" bg="bg-food-light" bgDark="dark:bg-food-dark" />
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped></style>
