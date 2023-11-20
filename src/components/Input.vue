<script setup lang="ts">
const props = defineProps({
    type: String,
    modelValue: String,
    icon: String,
});

const emit = defineEmits(["update:modelValue"]);

function formatCurrency(amount: number) {
    return (Number(amount.toString().replace(".", "")) / 100).toFixed(2);
}
</script>

<template>
    <md-filled-text-field type="number" prefix-text="$" :value="modelValue" @input="$emit('update:modelValue', formatCurrency($event.target.value))" v-if="type === 'currency'">
        <md-icon slot="leading-icon">{{ icon }}</md-icon>
    </md-filled-text-field>
    <md-filled-text-field :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-else>
        <md-icon slot="leading-icon">{{ icon }}</md-icon>
    </md-filled-text-field>
</template>

<style scoped></style>
