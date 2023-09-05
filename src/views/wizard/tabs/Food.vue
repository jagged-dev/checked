<script setup lang="ts">
import { ref, onUpdated } from "vue";
import Input from "@/components/Input.vue";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

const props = defineProps({
    party: Object,
    tab: Number,
});

const emit = defineEmits(["update:food", "switch:tab"]);

const food = ref([
    {
        name: "",
        price: NaN,
        guests: [],
    },
]);

onUpdated(() => {
    emit("update:food", food.value);
});

function addItem() {
    food.value.push({
        name: "",
        price: NaN,
        guests: [],
    });
}

function removeItem(item: any) {
    food.value.splice(food.value.indexOf(item), 1);
}

function selectGuest(event: any, item: any) {
    let guest = event.target;
    if (guest.selected) {
        item.guests.push(guest.label);
    } else {
        item.guests.splice(item.guests.indexOf(guest.label), 1);
    }
}
</script>

<template>
    <!-- food -->
    <div class="grid gap-8 lg:grid-cols-2" v-if="food.length > 0">
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-12 transition-background dark:bg-charcoal lg:last:odd:col-span-2" v-for="item in food">
            <!-- item -->
            <div class="flex items-center">
                <h1 class="mr-auto text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ item.name || "Item" }}:&ensp;${{ item.price || 0 }}</h1>
                <md-outlined-icon-button @click="removeItem(item)"><md-icon>close</md-icon></md-outlined-icon-button>
            </div>
            <Input type="text" label="Item" icon="fastfood" :value="item.name" @update:value="(value: String) => (item.name = value.toString())" />
            <Input type="number" label="Price" icon="receipt" prefix="$" :value="item.price.toString()" @update:value="(value: Number) => (item.price = Number(value))" />
            <!-- divider -->
            <md-divider></md-divider>
            <!-- guests -->
            <div class="flex gap-2">
                <md-filter-chip :label="guest.name" @selected="(event: any) => selectGuest(event, item)" v-for="guest in party">
                    <md-icon slot="icon">person</md-icon>
                </md-filter-chip>
            </div>
        </div>
    </div>
    <!-- add button -->
    <md-text-button @click="addItem"><md-icon slot="icon">add</md-icon>Add item</md-text-button>
    <!-- nav buttons -->
    <div class="grid gap-4 lg:grid-cols-2">
        <Back label="Previous" @click="$emit('switch:tab', tab! - 1)">Party</Back>
        <Next label="Submit" @click="$emit('switch:tab', tab! + 1)">Results</Next>
    </div>
</template>

<style scoped></style>
