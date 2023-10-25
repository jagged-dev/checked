<script setup lang="ts">
import { ref, computed, onUpdated } from "vue";
import Input from "@/components/Input.vue";

const emit = defineEmits(["update:amounts", "update:validity"]);

const amounts = ref({
    subtotal: "",
    tax: "",
    tip: "",
    total: "",
});

const valid = computed(() => {
    return Number(amounts.value.subtotal) > 0 && Number(amounts.value.tax) >= 0 && Number(amounts.value.tip) >= 0;
});

onUpdated(() => {
    let subtotal = Number(amounts.value.subtotal);
    let tax = Number(amounts.value.tax);
    let tip = Number(amounts.value.tip);
    let total = subtotal + tax + tip;
    amounts.value.total = total.toFixed(2);
    emit("update:amounts", amounts.value);
    emit("update:validity", valid.value);
});

function formatCurrency(amount: number) {
    return (Number(amount.toString().replace(".", "")) / 100).toFixed(2);
}
</script>

<template>
    <!-- amounts -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xs:p-12">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Total:&ensp;${{ amounts.total || 0 }}</h1>
        <!-- subtotal -->
        <Input type="number" label="Subtotal" icon="receipt" prefix="$" v-model="amounts.subtotal" @input="amounts.subtotal = formatCurrency($event.target.value)" />
        <!-- tax -->
        <Input type="number" label="Tax" icon="receipt" prefix="$" v-model="amounts.tax" @input="amounts.tax = formatCurrency($event.target.value)" />
        <!-- tip -->
        <Input type="number" label="Tip" icon="receipt" prefix="$" v-model="amounts.tip" @input="amounts.tip = formatCurrency($event.target.value)" />
    </div>
</template>

<style scoped></style>
