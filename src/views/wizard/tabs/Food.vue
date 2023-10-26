<script setup lang="ts">
import { ref, computed, onUpdated, onActivated } from "vue";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";

const props = defineProps({
    party: Array<string>,
    amounts: Object,
});

const emit = defineEmits(["update:food", "update:validity"]);

const food = ref<any[]>([]);
const item = ref("");
const touched = ref(false);

const total = computed(() => {
    let total = 0;
    for (let item of food.value) total += Number(item.price);
    return total === 0 ? total.toString() : total.toFixed(2);
});

const valid = computed(() => {
    return food.value.length > 0 && food.value.every((item) => item.name !== "" && Number(item.price) > 0 && item.purchaser !== "" && item.guests.length > 0) && total.value === props.amounts?.subtotal;
});

onUpdated(() => {
    touched.value = true;
    emit("update:food", food.value);
    emit("update:validity", valid.value);
});

onActivated(() => {
    for (let item of food.value) {
        if (!props.party?.includes(item.purchaser)) item.purchaser = "";
        let removed = [];
        for (let guest of item.guests) if (!props.party?.includes(guest)) removed.push(guest);
        for (let guest of removed) item.guests.splice(item.guests.indexOf(guest), 1);
    }
});

function addItem() {
    if (item.value !== "")
        food.value.push({
            name: item.value,
            price: "",
            purchaser: "",
            guests: [],
        });
    item.value = "";
}

function removeItem(item: any) {
    food.value.splice(food.value.indexOf(item), 1);
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
            <h1 class="text-xl font-bold transition-font" :class="{ 'text-red': touched && food.length > 0 && total !== amounts?.subtotal, 'text-gunmetal  dark:text-silver': !touched || food.length === 0 || total === amounts?.subtotal }">/&ensp;${{ amounts?.subtotal || 0 }}</h1>
        </div>
        <!-- item -->
        <Input type="text" label="Item" icon="restaurant" errorText="At least one item needs to be entered." :error="touched && item === '' && food.length === 0" v-model="item" @keyup.enter="addItem" />
        <!-- divider -->
        <md-divider></md-divider>
        <!-- items -->
        <div class="flex flex-wrap gap-2">
            <md-assist-chip label="Add item" :disabled="item === ''" @click="addItem">
                <md-icon slot="icon">add</md-icon>
            </md-assist-chip>
            <md-suggestion-chip :label="item.name" @click="removeItem(item)" v-for="item in food">
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
                <h1 class="mr-auto text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ item.name || "Item" }}:&ensp;${{ item.price || 0 }}</h1>
                <md-outlined-icon-button @click="removeItem(item)"><md-icon>close</md-icon></md-outlined-icon-button>
            </div>
            <!-- name -->
            <Input type="text" label="Item" icon="restaurant" errorText="Item name is required." :error="touched && item.name === ''" v-model="item.name" />
            <!-- price -->
            <Input type="number" label="Price" icon="receipt" prefix-text="$" errorText="Item price must be more than $0." :error="touched && Number(item.price) <= 0" v-model="item.price" @input="item.price = formatCurrency($event.target.value)" />
            <!-- purchaser -->
            <Select label="Purchaser" icon="person" :displayText="item.purchaser" errorText="Item purchaser and guests are required." :error="touched && (item.purchaser === '' || item.guests.length === 0)" v-model="item.purchaser">
                <md-select-option :value="guest" v-for="guest in party">
                    <div slot="headline">{{ guest }}</div>
                </md-select-option>
            </Select>
            <!-- divider -->
            <md-divider></md-divider>
            <!-- guests -->
            <div class="flex flex-wrap gap-2">
                <md-assist-chip label="Select guests" disabled>
                    <md-icon slot="icon">check</md-icon>
                </md-assist-chip>
                <md-filter-chip :label="guest" :selected="item.guests.includes(guest)" @click="toggleGuest(item, guest, $event.target.selected)" v-for="guest in party">
                    <md-icon slot="icon">add</md-icon>
                </md-filter-chip>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
