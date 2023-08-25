<script setup lang="ts">
import { RouterLink } from "vue-router";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

defineProps({ tabIdx: Number });
defineEmits(["switchTab"]);
</script>

<template>
    <div class="grid gap-4 xl:grid-cols-2">
        <RouterLink :to="{ name: 'home' }">
            <Back label="Back">Home</Back>
        </RouterLink>
        <Next label="Next" @click="$emit('switchTab', tabIdx! + 1)">People</Next>
    </div>
</template>

<style scoped></style>
