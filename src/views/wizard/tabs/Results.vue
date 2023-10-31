<script setup lang="ts">
import { ref, onActivated } from "vue";

const props = defineProps({
    event: Object,
    party: Array<string>,
    amounts: Object,
    food: Array<any>,
});

const results = ref();
const expanded = ref();

onActivated(() => {});

function toggleGuest(guest: string, selected: boolean) {
    if (!selected) expanded.value = guest;
    else expanded.value = "";
}
</script>

<template>
    <!-- results -->
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xs:p-12">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ event?.name }}</h1>
        <!-- divider -->
        <md-divider></md-divider>
        <!-- guests -->
        <div class="flex flex-wrap gap-2">
            <md-assist-chip label="View guest" disabled>
                <md-icon slot="icon">visibility</md-icon>
            </md-assist-chip>
            <md-filter-chip :label="guest" :selected="guest === expanded" @click="toggleGuest(guest, $event.target.selected)" v-for="guest in party">
                <md-icon slot="icon">add</md-icon>
            </md-filter-chip>
        </div>
    </div>
    <!-- details -->
    <div class="flex flex-col" :class="{ hidden: guest !== expanded }" v-for="guest in party">
        <div class="rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal">
            <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">{{ guest }}</h1>
        </div>
    </div>
    <!-- test -->
    <!-- <div class="flex flex-col gap-4">
        <span>{{ event }}</span>
        <span>{{ party }}</span>
        <span>{{ amounts }}</span>
        <span>{{ food }}</span>
        <span>{{ results }}</span>
    </div> -->
</template>

<style scoped></style>
