<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import { RouterView } from "vue-router";
import router from "@/router";
import Navbar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

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
            router.push({ name: "people" });
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
    <div class="bg-ice transition-background duration-500 dark:bg-charcoal">
        <Navbar />
        <Sidebar />

        <div class="h-screen pl-24 pt-24">
            <div class="h-full overflow-y-auto rounded-tl-3xl bg-snow transition-background duration-500 dark:bg-coal">
                <div class="flex flex-col gap-8 p-8">
                    <!-- active tab -->
                    <div class="hidden">{{ activeTab }}</div>
                    <!-- tabs -->
                    <md-tabs class="rounded-full bg-ice transition-background dark:bg-charcoal" ref="wizard">
                        <md-tab class="data-selected:bg-blue h-20 rounded-full transition-background">
                            <div class="flex items-center gap-2"><md-icon slot="icon">payments</md-icon>Amounts</div>
                        </md-tab>
                        <md-tab class="data-selected:bg-blue h-20 rounded-full transition-background">
                            <div class="flex items-center gap-2"><md-icon slot="icon">person</md-icon>People</div>
                        </md-tab>
                        <md-tab class="data-selected:bg-blue h-20 rounded-full transition-background">
                            <div class="flex items-center gap-2"><md-icon slot="icon">restaurant</md-icon>Food</div>
                        </md-tab>
                    </md-tabs>
                    <!-- tab content -->
                    <RouterView :tabIdx="activeTab" @switchTab="(tabIdx: Number) => (activeTab = tabIdx)" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
