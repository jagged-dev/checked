<script setup lang="ts">
import { ref, computed, onMounted, onUpdated } from "vue";
import { RouterView } from "vue-router";
import router from "@/router";
import Back from "@/components/Back.vue";
import Next from "@/components/Next.vue";

const routes = ref([
    {
        name: "event",
        valid: false,
    },
    {
        name: "party",
        valid: false,
    },
    {
        name: "check",
        valid: false,
    },
    {
        name: "food",
        valid: false,
    },
    {
        name: "results",
        valid: true,
    },
]);

const activeTab = ref();
const event = ref();
const party = ref();
const check = ref();
const food = ref();

const valid = computed(() => {
    return routes.value.every((route) => route.valid);
});

onMounted(() => {
    activeTab.value = 0;
});

onUpdated(() => {
    router.push({ name: routes.value[activeTab.value].name });
});
</script>

<template>
    <!-- wizard -->
    <div class="flex flex-col gap-8 p-8">
        <!-- tabs -->
        <md-tabs class="rounded-full bg-ice transition-background dark:bg-charcoal" :activeTabIndex="activeTab" @change="activeTab = $event.target.activeTabIndex" v-if="activeTab !== 4">
            <!-- event -->
            <md-primary-tab class="h-20 rounded-full transition-background" :class="{ 'bg-blue': activeTab === 0 }" inlineIcon><md-icon>event</md-icon>Event</md-primary-tab>
            <!-- party -->
            <md-primary-tab class="h-20 rounded-full transition-background" :class="{ 'bg-blue': activeTab === 1 }" inlineIcon><md-icon>group</md-icon>Party</md-primary-tab>
            <!-- check -->
            <md-primary-tab class="h-20 rounded-full transition-background" :class="{ 'bg-blue': activeTab === 2 }" inlineIcon><md-icon>receipt</md-icon>Check</md-primary-tab>
            <!-- food -->
            <md-primary-tab class="h-20 rounded-full transition-background" :class="{ 'bg-blue': activeTab === 3 }" inlineIcon><md-icon>restaurant_menu</md-icon>Food</md-primary-tab>
        </md-tabs>
        <!-- progress -->
        <md-linear-progress class="w-full rounded-full" :value="(activeTab + 1) / 4" v-if="activeTab !== 4"></md-linear-progress>
        <!-- tab content -->
        <RouterView :event="event" @update:event="event = $event" :party="party" @update:party="party = $event" :check="check" @update:check="check = $event" :food="food" @update:food="food = $event" @update:validity="routes[activeTab].valid = $event" v-slot="{ Component }">
            <KeepAlive exclude="Results">
                <component :is="Component" />
            </KeepAlive>
        </RouterView>
        <!-- nav buttons -->
        <div class="grid gap-4 xl:grid-cols-2">
            <!-- event -->
            <template v-if="activeTab === 0">
                <RouterLink :to="{ name: 'home' }">
                    <Back label="Back">Home</Back>
                </RouterLink>
                <Next label="Next" @click="activeTab++">Party</Next>
            </template>
            <!-- party -->
            <template v-if="activeTab === 1">
                <Back label="Previous" @click="activeTab--">Event</Back>
                <Next label="Next" @click="activeTab++">Check</Next>
            </template>
            <!-- check -->
            <template v-if="activeTab === 2">
                <Back label="Previous" @click="activeTab--">Party</Back>
                <Next label="Next" @click="activeTab++">Food</Next>
            </template>
            <!-- food -->
            <template v-if="activeTab === 3">
                <Back label="Previous" @click="activeTab--">Check</Back>
                <Next label="Submit" :disabled="!valid" @click="activeTab++">Results</Next>
            </template>
            <!-- results -->
            <template v-if="activeTab === 4">
                <Back label="Previous" @click="activeTab--">Food</Back>
                <RouterLink :to="{ name: 'home' }">
                    <Next label="Finish">Home</Next>
                </RouterLink>
            </template>
        </div>
    </div>
</template>

<style scoped></style>
