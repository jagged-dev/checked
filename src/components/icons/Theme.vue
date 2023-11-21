<script setup lang="ts">
window.onload = function () {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
}
</script>

<template>
    <!-- theme -->
    <button class="relative rounded-full p-3 text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" @click="toggleTheme">
        <!-- icon -->
        <svg class="h-6 w-6 transition-transform duration-500 ease-out dark:rotate-180"><use xlink:href="/assets/images/icons/icons.svg#theme" /></svg>
        <!-- ripple -->
        <md-ripple></md-ripple>
    </button>
</template>

<style scoped></style>
