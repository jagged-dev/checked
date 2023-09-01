<script setup lang="ts">
import { ref, onUpdated } from "vue";
import { RouterLink } from "vue-router";
import Input from "@/components/Input.vue";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

const props = defineProps({ tab: Number });
const emit = defineEmits(["update:amounts", "switch:tab"]);

const amounts = ref({
    subtotal: NaN,
    tax: NaN,
    tip: NaN,
    total: NaN,
});

onUpdated(() => {
    amounts.value.total = Number(((amounts.value.subtotal || 0) + (amounts.value.tax || 0) + (amounts.value.tip || 0)).toFixed(2));
    emit("update:amounts", amounts.value);
});
</script>

<template>
    <!-- amounts -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-12 transition-background dark:bg-charcoal">
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Total:&ensp;${{ amounts.total || 0 }}</h1>
        <Input type="number" label="Subtotal" icon="receipt" prefix="$" :value="amounts.subtotal.toString()" @update:value="(value: Number) => (amounts.subtotal = Number(value))" />
        <Input type="number" label="Tax" icon="receipt" prefix="$" :value="amounts.tax.toString()" @update:value="(value: Number) => (amounts.tax = Number(value))" />
        <Input type="number" label="Tip" icon="receipt" prefix="$" :value="amounts.tip.toString()" @update:value="(value: Number) => (amounts.tip = Number(value))" />
    </div>
    <!-- nav buttons -->
    <div class="grid gap-4 lg:grid-cols-2">
        <RouterLink :to="{ name: 'home' }">
            <Back label="Back">Home</Back>
        </RouterLink>
        <Next label="Next" @click="$emit('switch:tab', tab! + 1)">Party</Next>
    </div>
</template>

<style scoped></style>
