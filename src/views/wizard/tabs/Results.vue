<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
    event: Object,
    party: Array<string>,
    check: Object,
    food: Array<any>,
});

const results = ref<any>({});
const expanded = ref();

onMounted(() => {
    if (props.event && props.party && props.check && props.food) {
        let taxPct = Number(props.check.tax) / Number(props.check.subtotal);
        let tipPct = Number(props.check.tip) / Number(props.check.subtotal);

        for (let guest of props.party!) {
            results.value[guest] = {
                items: [],
                send: {},
                receive: {},
            };
            for (let guest2 of props.party!) {
                if (guest2 !== guest) {
                    results.value[guest].send[guest2] = 0;
                    results.value[guest].receive[guest2] = 0;
                }
            }
            results.value[guest].send.total = 0;
            results.value[guest].receive.total = 0;
        }

        for (let item of props.food!) {
            let itemSubtotal = Number(item.price);
            let itemTax = itemSubtotal * taxPct;
            let itemTip = itemSubtotal * tipPct;
            let itemTotal = itemSubtotal + itemTax + itemTip;

            let splitSubtotal = itemSubtotal / item.guests.length;
            let splitTax = itemTax / item.guests.length;
            let splitTip = itemTip / item.guests.length;
            let splitTotal = itemTotal / item.guests.length;

            for (let guest of item.guests) {
                results.value[guest].items.push({
                    name: item.name,
                    amounts: {
                        itemSubtotal: itemSubtotal,
                        itemTax: itemTax,
                        itemTip: itemTip,
                        itemTotal: itemTotal,
                        splitSubtotal: splitSubtotal,
                        splitTax: splitTax,
                        splitTip: splitTip,
                        splitTotal: splitTotal,
                    },
                    purchaser: item.purchaser,
                    guests: item.guests,
                });
                if (guest !== item.purchaser) {
                    let amount = results.value[guest].send[item.purchaser];
                    results.value[guest].send[item.purchaser] = amount + splitTotal;
                    results.value[item.purchaser].receive[guest] = amount + splitTotal;

                    let sendTotal = results.value[guest].send.total;
                    let receiveTotal = results.value[item.purchaser].receive.total;
                    results.value[guest].send.total = sendTotal + splitTotal;
                    results.value[item.purchaser].receive.total = receiveTotal + splitTotal;
                } else {
                    let sendTotal = results.value[item.purchaser].send.total;
                    results.value[item.purchaser].send.total = sendTotal + itemTotal;
                }
            }
        }

        for (let guest of props.party!) {
            for (let guest2 in results.value[guest].send) {
                results.value[guest].send[guest2] = Number(results.value[guest].send[guest2]).toFixed(2);
            }
            for (let guest2 in results.value[guest].receive) {
                results.value[guest].receive[guest2] = Number(results.value[guest].receive[guest2]).toFixed(2);
            }
        }
    }
});

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
            <md-assist-chip label="View results" disabled>
                <md-icon slot="icon">visibility</md-icon>
            </md-assist-chip>
            <md-filter-chip :label="guest" :selected="guest === expanded" @click="toggleGuest(guest, $event.target.selected)" v-for="guest in party">
                <md-icon slot="icon">arrow_drop_down</md-icon>
            </md-filter-chip>
        </div>
    </div>
    <!-- details -->
    <div class="grid gap-8 xl:grid-cols-3" :class="{ hidden: guest !== expanded }" v-for="guest in party">
        <!-- overview -->
        <div class="flex items-center rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:col-span-3">
            <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">{{ guest }}</h1>
            <div class="flex w-full justify-end gap-4">
                <h1 class="text-xl font-bold text-gunmetal transition-font dark:text-silver">${{ results[guest]?.receive?.total }}</h1>
                <h1 class="text-xl font-bold text-blue">${{ results[guest]?.send?.total }}</h1>
            </div>
        </div>
        <!-- guests -->
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal">
            <template v-for="g in party">
                <div class="flex" v-if="g !== guest">
                    <h1 class="font-bold text-charcoal transition-font dark:text-ice">{{ g }}</h1>
                    <div class="flex w-full justify-end gap-4">
                        <h1 class="font-bold text-gunmetal transition-font dark:text-silver">${{ results[guest]?.receive[g] }}</h1>
                        <h1 class="font-bold text-blue">${{ results[guest]?.send[g] }}</h1>
                    </div>
                </div>
            </template>
        </div>
        <!-- items -->
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:col-span-2">
            <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">Items</h1>
            <div class="flex flex-col" v-for="item in results[guest]?.items">
                <span>{{ item.name }}</span>
                <span>{{ item.amounts.itemSubtotal }}</span>
                <span>{{ item.amounts.itemTax }}</span>
                <span>{{ item.amounts.itemTip }}</span>
                <span>{{ item.amounts.itemTotal }}</span>
                <span>{{ item.amounts.splitSubtotal }}</span>
                <span>{{ item.amounts.splitTax }}</span>
                <span>{{ item.amounts.splitTip }}</span>
                <span>{{ item.amounts.splitTotal }}</span>
                <span>{{ item.purchaser }}</span>
                <span>{{ item.guests }}</span>
            </div>
        </div>
    </div>
    <!-- test -->
    <div class="flex flex-col gap-4">
        <span>{{ event }}</span>
        <span>{{ party }}</span>
        <span>{{ check }}</span>
        <span>{{ food }}</span>
        <span>{{ results }}</span>
    </div>
</template>

<style scoped></style>
