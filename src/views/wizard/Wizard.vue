<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    WIZARD
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'amounts' }">Amounts</RouterLink>
    <RouterLink :to="{ name: 'people' }">People</RouterLink>
    <RouterLink :to="{ name: 'food' }">Food</RouterLink>
    <RouterLink :to="{ name: 'summary' }">Summary</RouterLink>
    <RouterView />
</template>

<style scoped></style>
