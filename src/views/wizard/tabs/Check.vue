<script setup lang="ts">
import { ref, computed, onUpdated } from "vue";
import Input from "@/components/Input.vue";

const emit = defineEmits(["update:check", "update:validity"]);

const check = ref({
    subtotal: "",
    tax: "",
    tip: "",
    total: "",
});

const touched = ref(false);

const valid = computed(() => {
    return Number(check.value.subtotal) > 0 && Number(check.value.tax) >= 0 && Number(check.value.tip) >= 0;
});

onUpdated(() => {
    touched.value = true;
    let subtotal = Number(check.value.subtotal);
    let tax = Number(check.value.tax);
    let tip = Number(check.value.tip);
    let total = subtotal + tax + tip;
    check.value.total = total === 0 ? total.toString() : total.toFixed(2);
    emit("update:check", check.value);
    emit("update:validity", valid.value);
});
</script>

<template>
    <!-- check -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:p-12">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Total:&ensp;${{ check.total || 0 }}</h1>
        <!-- subtotal -->
        <Input type="currency" label="Subtotal" icon="payments" error-text="Subtotal amount must be more than $0." :error="touched && Number(check.subtotal) <= 0" v-model="check.subtotal" />
        <!-- tax -->
        <Input type="currency" label="Tax" icon="payments" error-text="Tax amount must be at least $0." :error="touched && Number(check.tax) < 0" v-model="check.tax" />
        <!-- tip -->
        <Input type="currency" label="Tip" icon="payments" error-text="Tip amount must be at least $0." :error="touched && Number(check.tip) < 0" v-model="check.tip" />
    </div>
</template>

<style scoped></style>
