<script setup lang="ts">
import { ref, computed, onUpdated, onActivated } from "vue";
import Input from "@/components/Input.vue";

const props = defineProps({
    party: Array<string>,
    check: Object,
});

const emit = defineEmits(["update:food", "update:validity"]);

const food = ref<any[]>([
    {
        name: "",
        price: "",
        guests: [],
    },
]);

const touched = ref(false);

const total = computed(() => {
    let total = 0;
    for (let item of food.value) total += Number(item.price);
    return total === 0 ? total.toString() : total.toFixed(2);
});

const valid = computed(() => {
    return food.value.length > 0 && food.value.every((item) => item.name !== "" && Number(item.price) > 0 && item.guests.length > 0) && total.value === props.check?.subtotal;
});

onUpdated(() => {
    touched.value = true;
    emit("update:food", food.value);
    emit("update:validity", valid.value);
});

onActivated(() => {
    for (let item of food.value) {
        let removed = [];
        for (let guest of item.guests) if (!props.party?.includes(guest)) removed.push(guest);
        for (let guest of removed) item.guests.splice(item.guests.indexOf(guest), 1);
    }
});

function addItem() {
    food.value.push({
        name: "",
        price: "",
        guests: [],
    });
}

function removeItem(item: any) {
    food.value.splice(food.value.indexOf(item), 1);
}

function selectGuests(item: any) {
    item.guests = [];
    for (let guest of props.party!) item.guests.push(guest);
}

function removeGuests(item: any) {
    item.guests = [];
}

function toggleGuest(item: any, guest: string, selected: boolean) {
    if (!selected) item.guests.push(guest);
    else item.guests.splice(item.guests.indexOf(guest), 1);
}

function formatCurrency(amount: number) {
    return (Number(amount.toString().replace(".", "")) / 100).toFixed(2);
}
</script>

<template>
    <!-- food -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xs:p-12">
        <!-- heading -->
        <div class="flex items-end gap-4">
            <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Total:&ensp;${{ total || 0 }}</h1>
            <h1 class="text-xl font-bold transition-font" :class="{ 'text-red': touched && food.length > 0 && total !== check?.subtotal, 'text-gunmetal  dark:text-silver': !touched || food.length === 0 || total === check?.subtotal }">/&ensp;${{ check?.subtotal || 0 }}</h1>
        </div>
        <!-- divider -->
        <md-divider></md-divider>
        <!-- items -->
        <div class="flex flex-wrap gap-2">
            <md-assist-chip label="Items" disabled>
                <md-icon slot="icon">restaurant</md-icon>
            </md-assist-chip>
            <md-suggestion-chip :label="item.name || 'Item ' + (food.indexOf(item) + 1)" @click="removeItem(item)" v-for="item in food">
                <md-icon slot="icon">close</md-icon>
            </md-suggestion-chip>
        </div>
    </div>
    <!-- items -->
    <div class="grid gap-8 xl:grid-cols-2" v-if="food.length > 0">
        <!-- item -->
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xs:p-12 xl:last:odd:col-span-2" v-for="item in food">
            <!-- heading -->
            <div class="flex items-center">
                <h1 class="mr-auto text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ item.name || "Item #" + (food.indexOf(item) + 1) }}:&ensp;${{ item.price || 0 }}</h1>
                <md-outlined-icon-button @click="removeItem(item)"><md-icon>close</md-icon></md-outlined-icon-button>
            </div>
            <!-- name -->
            <Input type="text" label="Item" icon="restaurant" errorText="Item name is required." :error="touched && item.name === ''" v-model="item.name" />
            <!-- price -->
            <Input type="number" label="Price" icon="payments" prefix-text="$" errorText="Item price must be more than $0." :error="touched && Number(item.price) <= 0" v-model="item.price" @input="item.price = formatCurrency($event.target.value)" />
            <!-- divider -->
            <md-divider></md-divider>
            <!-- guests -->
            <div class="flex flex-wrap gap-2">
                <md-assist-chip label="Select all" @click="selectGuests(item)" v-if="!party?.every((guest) => item.guests.includes(guest))">
                    <md-icon slot="icon">check</md-icon>
                </md-assist-chip>
                <md-assist-chip label="Remove all" @click="removeGuests(item)" v-else>
                    <md-icon slot="icon">close</md-icon>
                </md-assist-chip>
                <md-filter-chip :label="guest" :selected="item.guests.includes(guest)" @click="toggleGuest(item, guest, $event.target.selected)" v-for="guest in party">
                    <md-icon slot="icon">add</md-icon>
                </md-filter-chip>
            </div>
        </div>
    </div>
    <!-- add button -->
    <md-text-button @click="addItem"><md-icon slot="icon">add</md-icon>Add item</md-text-button>
</template>

<style scoped></style>
