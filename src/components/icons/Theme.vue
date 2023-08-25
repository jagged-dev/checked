<script setup lang="ts"></script>

<template>
    <a class="relative rounded-full p-3 text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" href="javascript:toggleTheme()">
        <svg class="h-6 w-6 transition-transform duration-500 ease-out dark:rotate-180"><use xlink:href="/assets/images/icons/icons.svg#theme" /></svg>
        <md-ripple></md-ripple>
    </a>
</template>

<style scoped></style>
