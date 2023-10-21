<script setup lang="ts">
import { ref, onUpdated } from "vue";
import Input from "@/components/Input.vue";

const emit = defineEmits(["update:amounts"]);

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
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Total:&ensp;${{ amounts.total || 0 }}</h1>
        <!-- subtotal -->
        <Input type="number" label="Subtotal" icon="receipt" prefix="$" v-model.number="amounts.subtotal" />
        <!-- tax -->
        <Input type="number" label="Tax" icon="receipt" prefix="$" v-model.number="amounts.tax" />
        <!-- tip -->
        <Input type="number" label="Tip" icon="receipt" prefix="$" v-model.number="amounts.tip" />
    </div>
</template>

<style scoped></style>
