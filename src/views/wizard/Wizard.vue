<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import { RouterView } from "vue-router";
import router from "@/router";

const wizard = ref(null);
const activeTab = ref();
let tabs: any;

onMounted(() => {
    tabs = wizard.value!;
    activeTab.value = tabs.selected;

    tabs.addEventListener("change", (event: Event) => {
        activeTab.value = tabs.selected;
    });
});

onUpdated(() => {
    tabs.selected = activeTab.value;

    for (const [i, tab] of Array.from(tabs.children).entries()) {
        (<any>tab).setAttribute("data-selected", i === activeTab.value ? "true" : "false");
    }

    switch (activeTab.value) {
        case 0:
            router.push({ name: "amounts" });
            break;
        case 1:
            router.push({ name: "party" });
            break;
        case 2:
            router.push({ name: "food" });
            break;
        default:
            break;
    }
});
</script>

<template>
    <div class="flex flex-col gap-8 p-8">
        <!-- active tab -->
        <div class="hidden">{{ activeTab }}</div>
        <!-- tabs -->
        <md-tabs class="rounded-full bg-ice transition-background dark:bg-charcoal" ref="wizard">
            <md-tab class="h-20 rounded-full transition-background data-selected:bg-blue">
                <div class="flex items-center gap-2"><md-icon>payments</md-icon>Amounts</div>
            </md-tab>
            <md-tab class="h-20 rounded-full transition-background data-selected:bg-blue">
                <div class="flex items-center gap-2"><md-icon>group</md-icon>Party</div>
            </md-tab>
            <md-tab class="h-20 rounded-full transition-background data-selected:bg-blue">
                <div class="flex items-center gap-2"><md-icon>restaurant_menu</md-icon>Food</div>
            </md-tab>
        </md-tabs>
        <!-- tab content -->
        <RouterView :tabIdx="activeTab" @switchTab="(tabIdx: Number) => (activeTab = tabIdx)" v-slot="{ Component }">
            <KeepAlive>
                <component :is="Component" />
            </KeepAlive>
        </RouterView>
    </div>
</template>

<style scoped></style>
