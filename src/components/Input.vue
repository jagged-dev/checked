<script setup lang="ts">
const props = defineProps({
    type: String,
    label: String,
    icon: String,
    prefix: String,
    value: String,
});

const emit = defineEmits(["update:value"]);
</script>

<template>
    <md-filled-text-field :type="type" :label="label" :prefix-text="prefix" :value="value" @input="(event: any) => $emit('update:value', event.target.value)">
        <md-icon slot="leadingicon">{{ icon }}</md-icon>
    </md-filled-text-field>
</template>

<style scoped></style>
