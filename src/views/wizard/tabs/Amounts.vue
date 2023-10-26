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

const touched = ref(false);

const valid = computed(() => {
    return Number(amounts.value.subtotal) > 0 && Number(amounts.value.tax) >= 0 && Number(amounts.value.tip) >= 0;
});

onUpdated(() => {
    touched.value = true;
    let subtotal = Number(amounts.value.subtotal);
    let tax = Number(amounts.value.tax);
    let tip = Number(amounts.value.tip);
    let total = subtotal + tax + tip;
    amounts.value.total = total === 0 ? total.toString() : total.toFixed(2);
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
        <Input type="number" label="Subtotal" icon="receipt" prefix-text="$" errorText="Subtotal amount must be more than $0." :error="touched && Number(amounts.subtotal) <= 0" v-model="amounts.subtotal" @input="amounts.subtotal = formatCurrency($event.target.value)" />
        <!-- tax -->
        <Input type="number" label="Tax" icon="receipt" prefix-text="$" errorText="Tax amount must be at least $0." :error="touched && Number(amounts.tax) < 0" v-model="amounts.tax" @input="amounts.tax = formatCurrency($event.target.value)" />
        <!-- tip -->
        <Input type="number" label="Tip" icon="receipt" prefix-text="$" errorText="Tip amount must be at least $0." :error="touched && Number(amounts.tip) < 0" v-model="amounts.tip" @input="amounts.tip = formatCurrency($event.target.value)" />
    </div>
</template>

<style scoped></style>
