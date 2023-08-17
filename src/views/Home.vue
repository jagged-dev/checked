<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <svg><use xlink:href="assets/images/icons/icons.svg#logo" /></svg>
        <h1>Checked</h1>
    </div>
    <RouterLink :to="{ name: 'wizard' }">
        <md-elevated-button>Get Started</md-elevated-button>
        <md-filled-button>Get Started</md-filled-button>
        <md-tonal-button>Get Started</md-tonal-button>
        <md-outlined-button>Get Started</md-outlined-button>
        <md-text-button>Get Started</md-text-button>
    </RouterLink>
</template>

<style scoped></style>
