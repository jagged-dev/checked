<script setup lang="ts">
import { RouterView } from "vue-router";
import router from "@/router";
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
    <main class="bg-ice transition-background duration-500 dark:bg-charcoal">
        <RouterView v-if="router.currentRoute.value.name === 'home'" />
        <div v-else>
            <Navbar />
            <Sidebar />
            <div class="h-screen pl-24 pt-24">
                <div class="flex h-full flex-col overflow-y-auto rounded-tl-3xl bg-snow transition-background duration-500 dark:bg-coal">
                    <RouterView />
                    <Footer></Footer>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
