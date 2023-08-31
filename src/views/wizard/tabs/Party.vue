<script setup lang="ts">
import { ref, onUpdated } from "vue";
import Input from "@/components/Input.vue";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

const props = defineProps({ tabIdx: Number });
const emit = defineEmits(["update:party", "switch:tab"]);

const party = ref([
    {
        name: "",
        email: "",
    },
]);

onUpdated(() => {
    emit("update:party", party.value);
});

function addGuest() {
    party.value.push({
        name: "",
        email: "",
    });
}

function removeGuest(guest: any) {
    party.value.splice(party.value.indexOf(guest), 1);
}
</script>

<template>
    <!-- party -->
    <div class="grid gap-8 lg:grid-cols-2">
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-12 transition-background dark:bg-charcoal lg:last:odd:col-span-2" v-for="guest in party">
            <div class="flex items-center">
                <h1 class="mr-auto text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ guest.name || "Guest" }}</h1>
                <md-outlined-icon-button @click="removeGuest(guest)"><md-icon>close</md-icon></md-outlined-icon-button>
            </div>
            <Input type="text" label="Name" icon="person" :value="guest.name" @update:value="(value: String) => (guest.name = value.toString())" />
            <Input type="text" label="Email" icon="mail" :value="guest.email" @update:value="(value: String) => (guest.email = value.toString())" />
        </div>
    </div>
    <!-- add button -->
    <div class="flex justify-end">
        <md-fab variant="tertiary" label="Add guest" @click="addGuest"><md-icon slot="icon">add</md-icon></md-fab>
    </div>
    <!-- nav buttons -->
    <div class="grid gap-4 lg:grid-cols-2">
        <Back label="Previous" @click="$emit('switch:tab', tabIdx! - 1)">Amounts</Back>
        <Next label="Next" @click="$emit('switch:tab', tabIdx! + 1)">Food</Next>
    </div>
</template>

<style scoped></style>
