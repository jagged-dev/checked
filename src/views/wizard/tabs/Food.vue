<script setup lang="ts">
import { ref, computed, onUpdated, onActivated } from "vue";
import { onBeforeRouteLeave } from "vue-router";
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

const touched = ref<any[]>([
    {
        name: false,
        price: false,
        guests: false,
    },
]);

const left = ref(false);

const total = computed(() => {
    let total = 0;
    for (let item of food.value) total += Number(item.price);
    return total === 0 ? total.toString() : total.toFixed(2);
});

const valid = computed(() => {
    return food.value.length > 0 && food.value.every((item) => item.name !== "" && Number(item.price) > 0 && item.guests.length > 0) && total.value === props.check?.subtotal;
});

onUpdated(() => {
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

onBeforeRouteLeave((to, from) => {
    left.value = true;
});

function addItem() {
    food.value.push({
        name: "",
        price: "",
        guests: [],
    });
    touched.value.push({
        name: false,
        price: false,
        guests: false,
    });
}

function removeItem(item: any) {
    touched.value.splice(food.value.indexOf(item), 1);
    food.value.splice(food.value.indexOf(item), 1);
}

function toggleGuests(item: any) {
    if (!props.party?.every((guest) => item.guests.includes(guest))) {
        for (let guest of props.party!) {
            if (!item.guests.includes(guest)) item.guests.push(guest);
        }
    } else item.guests = [];
    touched.value[food.value.indexOf(item)].guests = true;
}

function toggleGuest(item: any, guest: string) {
    if (!item.guests.includes(guest)) item.guests.push(guest);
    else item.guests.splice(item.guests.indexOf(guest), 1);
    touched.value[food.value.indexOf(item)].guests = true;
}
</script>

<template>
    <!-- food -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:p-12">
        <!-- heading -->
        <div class="flex items-end gap-4">
            <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Total:&ensp;${{ total || 0 }}</h1>
            <h1 class="text-xl font-bold transition-font" :class="{ 'text-gunmetal  dark:text-silver': food.length === 0 || total === check?.subtotal, 'text-red': food.length > 0 && total !== check?.subtotal }">/&ensp;${{ check?.subtotal || 0 }}</h1>
        </div>
        <!-- divider -->
        <md-divider></md-divider>
        <!-- items -->
        <div class="flex flex-wrap gap-2">
            <md-assist-chip label="Items" disabled>
                <md-icon slot="icon">restaurant</md-icon>
            </md-assist-chip>
            <md-suggestion-chip :label="item.name || 'Item ' + (index + 1)" @click="removeItem(item)" v-for="(item, index) in food">
                <md-icon slot="icon">close</md-icon>
            </md-suggestion-chip>
        </div>
    </div>
    <!-- items -->
    <div class="grid gap-8 xl:grid-cols-2" v-if="food.length > 0">
        <!-- item -->
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:p-12 xl:last:odd:col-span-2" v-for="(item, index) in food">
            <!-- heading -->
            <div class="flex items-center">
                <h1 class="mr-auto text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ item.name || "Item #" + (index + 1) }}:&ensp;${{ item.price || 0 }}</h1>
                <md-outlined-icon-button @click="removeItem(item)"><md-icon>close</md-icon></md-outlined-icon-button>
            </div>
            <!-- name -->
            <Input type="text" label="Item" icon="restaurant" error-text="Item name is required." :error="(touched[index].name || left) && item.name === ''" v-model="item.name" @input="touched[index].name = true" />
            <!-- price -->
            <Input type="currency" label="Price" icon="payments" error-text="Item price must be more than $0." :error="(touched[index].price || left) && Number(item.price) <= 0" v-model="item.price" @input="touched[index].price = true" />
            <!-- divider -->
            <md-divider></md-divider>
            <!-- guests -->
            <div class="flex flex-wrap gap-2">
                <md-assist-chip label="Guests" :disabled="!party || party?.length === 0" @click="toggleGuests(item)">
                    <md-icon slot="icon" v-if="party?.length === 0 || !party?.every((guest) => item.guests.includes(guest))">check</md-icon>
                    <md-icon slot="icon" v-else>close</md-icon>
                </md-assist-chip>
                <md-filter-chip :class="{ error: (touched[index].guests || left) && item.guests.length === 0 }" :label="guest" :selected="item.guests.includes(guest)" @click="toggleGuest(item, guest)" v-for="guest in party">
                    <md-icon slot="icon">add</md-icon>
                </md-filter-chip>
            </div>
        </div>
    </div>
    <!-- add button -->
    <md-text-button @click="addItem"><md-icon slot="icon">add</md-icon>Add item</md-text-button>
</template>

<style scoped></style>
