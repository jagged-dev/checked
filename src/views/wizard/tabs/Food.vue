<script setup lang="ts">
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

const props = defineProps({ tabIdx: Number });
const emit = defineEmits(["update:food", "switch:tab"]);
</script>

<template>
    <div class="grid gap-4 lg:grid-cols-2">
        <Back label="Previous" @click="$emit('switch:tab', tabIdx! - 1)">Party</Back>
        <Next label="Submit" @click="$emit('switch:tab', tabIdx! + 1)">Results</Next>
    </div>
</template>

<style scoped></style>
