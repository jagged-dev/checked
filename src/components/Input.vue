<script setup lang="ts">
const props = defineProps({
    type: String,
    label: String,
    icon: String,
    prefix: String,
    suffix: String,
    value: String,
});

const emit = defineEmits(["update:value"]);
</script>

<template>
    <md-filled-text-field :type="type" :label="label" :prefix-text="prefix" :suffix-text="suffix" :value="value" @input="(event: any) => $emit('update:value', event.target.value)">
        <md-icon slot="leading-icon">{{ icon }}</md-icon>
    </md-filled-text-field>
</template>

<style scoped></style>
