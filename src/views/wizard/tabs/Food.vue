<script setup lang="ts">
import { RouterLink } from "vue-router";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

defineProps({ tabIdx: Number });
defineEmits(["switchTab"]);
</script>

<template>
    <div class="grid gap-4 lg:grid-cols-2">
        <Back label="Previous" @click="$emit('switchTab', tabIdx! - 1)">People</Back>
        <RouterLink :to="{ name: 'results' }">
            <Next label="Submit">Results</Next>
        </RouterLink>
    </div>
</template>

<style scoped></style>
