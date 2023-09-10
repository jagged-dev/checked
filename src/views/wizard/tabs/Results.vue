<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Input from "@/components/Input.vue";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

const props = defineProps({
    amounts: Object,
    party: Array<any>,
    food: Array<any>,
    tab: Number,
});

const results: any = ref({});

for (let guest of props.party!) {
    results.value[guest.name] = {
        food: [],
        subtotal: 0,
        tax: 0,
        tip: 0,
        total: 0,
    };
}

for (let item of props.food!) {
    let itemSplit = item.price / item.guests.length;
    for (let guest of item.guests) {
        results.value[guest].food.push({
            name: item.name,
            price: Number(itemSplit.toFixed(2)),
        });
        results.value[guest].subtotal = Number((results.value[guest].subtotal + itemSplit).toFixed(2));
    }
}

for (let guest in results.value) {
    let subtotalSplit = results.value[guest].subtotal / props.amounts!.subtotal;
    results.value[guest].tax = Number((props.amounts!.tax * subtotalSplit).toFixed(2));
    results.value[guest].tip = Number((props.amounts!.tip * subtotalSplit).toFixed(2));
    results.value[guest].total = Number((results.value[guest].subtotal + results.value[guest].tax + results.value[guest].tip).toFixed(2));
}
</script>

<template>
    <!-- heading -->
    <h1 class="text-3xl font-bold leading-none text-charcoal transition-font dark:text-ice">Results</h1>
    <!-- results -->
    <div class="flex flex-col gap-4 px-8" v-for="guest in party">
        <!-- guest -->
        <div class="flex items-center gap-4">
            <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ guest.name }}</h1>
            <md-text-button><md-icon slot="icon">share</md-icon>Share</md-text-button>
        </div>
        <!-- divider -->
        <md-divider></md-divider>
        <!-- food -->
        <Input type="text" label="Item" icon="fastfood" :suffix="'$' + item.price" :value="item.name" disabled v-for="item in results[guest.name].food" />
        <!-- divider -->
        <md-divider></md-divider>
        <!-- amounts -->
        <Input type="text" label="Amount" icon="receipt" :suffix="'$' + results[guest.name].subtotal" value="Subtotal" disabled />
        <Input type="text" label="Amount" icon="receipt" :suffix="'$' + results[guest.name].tax" value="Tax" disabled />
        <Input type="text" label="Amount" icon="receipt" :suffix="'$' + results[guest.name].tip" value="Tip" disabled />
        <!-- divider -->
        <md-divider></md-divider>
        <!-- total -->
        <h1 class="ml-auto text-xl font-bold text-charcoal transition-font dark:text-ice">Total:&ensp;${{ results[guest.name].total }}</h1>
    </div>
    <!-- nav buttons -->
    <div class="grid gap-4 lg:grid-cols-2">
        <Back label="Previous" @click="$emit('switch:tab', tab! - 1)">Food</Back>
        <RouterLink :to="{ name: 'home' }">
            <Next label="Finish">Home</Next>
        </RouterLink>
    </div>
</template>

<style scoped></style>
