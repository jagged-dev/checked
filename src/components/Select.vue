<script setup lang="ts">
const props = defineProps({
    modelValue: String,
    icon: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <md-filled-select hasLeadingIcon quick :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
        <md-icon slot="leading-icon">{{ icon }}</md-icon>
        <md-select-option displayText="">
            <div slot="headline">...</div>
        </md-select-option>
        <slot></slot>
    </md-filled-select>
</template>

<style scoped></style>
