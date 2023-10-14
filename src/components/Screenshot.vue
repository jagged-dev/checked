<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
    bg: String,
    bgDark: String,
});

const screenshot = ref();

onMounted(() => {
    let div: HTMLDivElement = screenshot.value!;
    div.classList.add(props.bg!, props.bgDark!);
});
</script>

<template>
    <div class="h-full w-full rounded-3xl border-8 border-gunmetal border-opacity-25 bg-cover bg-clip-content transition dark:border-silver dark:border-opacity-25" ref="screenshot"></div>
</template>

<style scoped></style>
