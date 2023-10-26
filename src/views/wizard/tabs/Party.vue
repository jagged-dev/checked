<script setup lang="ts">
import { ref, computed, onUpdated } from "vue";
import Input from "@/components/Input.vue";

const emit = defineEmits(["update:party", "update:validity"]);

const party = ref<string[]>([]);
const guest = ref("");

const valid = computed(() => {
    return party.value.length > 0;
});

onUpdated(() => {
    emit("update:party", party.value);
    emit("update:validity", valid.value);
});

function addGuest() {
    if (guest.value !== "") party.value.push(guest.value);
    guest.value = "";
}

function removeGuest(guest: string) {
    party.value.splice(party.value.indexOf(guest), 1);
}
</script>

<template>
    <!-- party -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xs:p-12">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">Party of {{ party.length || 0 }}</h1>
        <!-- guest -->
        <Input type="text" label="Guest" icon="person" v-model="guest" @keyup.enter="addGuest" />
        <!-- divider -->
        <md-divider></md-divider>
        <!-- guests -->
        <div class="flex flex-wrap gap-2">
            <md-assist-chip label="Add guest" :disabled="guest === ''" @click="addGuest">
                <md-icon slot="icon">add</md-icon>
            </md-assist-chip>
            <md-suggestion-chip :label="guest" @click="removeGuest(guest)" v-for="guest in party">
                <md-icon slot="icon">close</md-icon>
            </md-suggestion-chip>
        </div>
    </div>
</template>

<style scoped></style>
