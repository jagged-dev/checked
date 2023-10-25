<script setup lang="ts">
import { ref, computed, onUpdated, onActivated } from "vue";
import Input from "@/components/Input.vue";

const props = defineProps({ party: Array<string> });
const emit = defineEmits(["update:food", "update:validity"]);

const food = ref([
    {
        name: "",
        price: "",
        purchaser: "",
        guests: <string[]>[],
    },
]);

const valid = computed(() => {
    return food.value.length > 0 && food.value.every((item) => item.name !== "" && Number(item.price) > 0 && item.purchaser !== "" && item.guests.length > 0);
});

onUpdated(() => {
    emit("update:food", food.value);
    emit("update:validity", valid.value);
});

onActivated(() => {
    for (let item of food.value) {
        if (!props.party?.includes(item.purchaser)) item.purchaser = "";
        for (let guest of item.guests) {
            if (!props.party?.includes(guest)) item.guests.splice(item.guests.indexOf(guest), 1);
        }
    }
});

function addItem() {
    food.value.push({
        name: "",
        price: "",
        purchaser: "",
        guests: [],
    });
}

function removeItem(item: any) {
    food.value.splice(food.value.indexOf(item), 1);
}

function selectPurchaser(item: any, guest: string) {
    item.purchaser = guest;
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
    <div class="grid gap-8 xl:grid-cols-2" v-if="food.length > 0">
        <!-- item -->
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-12 transition-background dark:bg-charcoal xl:last:odd:col-span-2" v-for="item in food">
            <!-- heading -->
            <div class="flex items-center">
                <h1 class="mr-auto text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ item.name || "Item" }}:&ensp;${{ item.price || 0 }}</h1>
                <md-outlined-icon-button @click="removeItem(item)"><md-icon>close</md-icon></md-outlined-icon-button>
            </div>
            <!-- name -->
            <Input type="text" label="Item" icon="fastfood" v-model="item.name" />
            <!-- price -->
            <Input type="number" label="Price" icon="receipt" prefix="$" v-model="item.price" @input="item.price = formatCurrency($event.target.value)" />
            <!-- purchaser -->
            <md-filled-select label="Purchaser" :displayText="item.purchaser" hasLeadingIcon @change="selectPurchaser(item, $event.target.value)">
                <md-icon slot="leading-icon">person</md-icon>
                <md-select-option displayText=""><div slot="headline">...</div></md-select-option>
                <md-select-option :value="guest" v-for="guest in party">
                    <div slot="headline">{{ guest }}</div>
                </md-select-option>
            </md-filled-select>
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
    <!-- add button -->
    <md-text-button @click="addItem"><md-icon slot="icon">add</md-icon>Add item</md-text-button>
</template>

<style scoped></style>
