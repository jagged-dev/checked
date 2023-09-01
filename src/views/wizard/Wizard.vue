<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import { RouterView } from "vue-router";
import router from "@/router";

const wizard = ref();
const activeTab = ref();
const routes = ["amounts", "party", "food", "results"];

const data = ref({
    amounts: Object,
    party: Object,
    food: Object,
});

onMounted(() => {
    let tabs: any = wizard.value!;
    activeTab.value = tabs.selected;
    tabs.addEventListener("change", () => (activeTab.value = tabs.selected));
});

onUpdated(() => {
    let tabs: any = wizard.value!;
    tabs.selected = activeTab.value;
    router.push({ name: routes[activeTab.value] });
});
</script>

<template>
    <div class="flex flex-col gap-8 p-8">
        <!-- active tab -->
        <div class="hidden">{{ activeTab }}</div>
        <!-- tabs -->
        <md-tabs class="rounded-full bg-ice transition-background dark:bg-charcoal" ref="wizard">
            <md-tab class="h-20 rounded-full transition-background" :class="{ 'bg-blue': activeTab === 0 }">
                <div class="flex items-center gap-2"><md-icon>payments</md-icon>Amounts</div>
            </md-tab>
            <md-tab class="h-20 rounded-full transition-background" :class="{ 'bg-blue': activeTab === 1 }">
                <div class="flex items-center gap-2"><md-icon>group</md-icon>Party</div>
            </md-tab>
            <md-tab class="h-20 rounded-full transition-background" :class="{ 'bg-blue': activeTab === 2 }">
                <div class="flex items-center gap-2"><md-icon>restaurant_menu</md-icon>Food</div>
            </md-tab>
        </md-tabs>
        <!-- tab content -->
        <RouterView :tabIdx="activeTab" @switch:tab="(tabIdx: Number) => (activeTab = tabIdx)" @update:amounts="(amounts: any) => (data.amounts = amounts)" @update:party="(party: any) => (data.party = party)" @update:food="(food: any) => (data.food = food)" v-slot="{ Component }">
            <KeepAlive>
                <component :is="Component" />
            </KeepAlive>
        </RouterView>
    </div>
</template>

<style scoped></style>
