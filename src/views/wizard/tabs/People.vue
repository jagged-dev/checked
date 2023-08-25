<script setup lang="ts">
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

defineProps({ tabIdx: Number });
defineEmits(["switchTab"]);
</script>

<template>
    <div class="grid gap-4 xl:grid-cols-2">
        <Back label="Previous" @click="$emit('switchTab', tabIdx! - 1)">Amounts</Back>
        <Next label="Next" @click="$emit('switchTab', tabIdx! + 1)">Food</Next>
    </div>
</template>

<style scoped></style>
