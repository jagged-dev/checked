<script setup lang="ts">
const props = defineProps(["type", "label", "icon", "prefix", "suffix", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <md-filled-text-field :type="type" :label="label" :prefix-text="prefix" :suffix-text="suffix" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        <md-icon slot="leading-icon">{{ icon }}</md-icon>
    </md-filled-text-field>
</template>

<style scoped></style>
