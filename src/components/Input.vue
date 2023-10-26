<script setup lang="ts">
const props = defineProps({
    modelValue: String,
    icon: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <md-filled-text-field :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        <md-icon slot="leading-icon">{{ icon }}</md-icon>
    </md-filled-text-field>
</template>

<style scoped></style>
