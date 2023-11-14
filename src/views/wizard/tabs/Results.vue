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
                subtotal: "",
                tax: "",
                tip: "",
                total: "",
            };
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
                        itemSubtotal: itemSubtotal.toFixed(2),
                        itemTax: itemTax.toFixed(2),
                        itemTip: itemTip.toFixed(2),
                        itemTotal: itemTotal.toFixed(2),
                        splitSubtotal: splitSubtotal.toFixed(2),
                        splitTax: splitTax.toFixed(2),
                        splitTip: splitTip.toFixed(2),
                        splitTotal: splitTotal.toFixed(2),
                    },
                    guests: item.guests,
                });
                results.value[guest].subtotal = (Number(results.value[guest].subtotal) + splitSubtotal).toFixed(2);
                results.value[guest].tax = (Number(results.value[guest].tax) + splitTax).toFixed(2);
                results.value[guest].tip = (Number(results.value[guest].tip) + splitTip).toFixed(2);
                results.value[guest].total = (Number(results.value[guest].total) + splitTotal).toFixed(2);
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
            <md-assist-chip label="Results" disabled>
                <md-icon slot="icon">filter_list</md-icon>
            </md-assist-chip>
            <md-filter-chip :label="guest" :selected="guest === expanded" @click="toggleGuest(guest, $event.target.selected)" v-for="guest in party">
                <md-icon slot="icon">arrow_drop_down</md-icon>
            </md-filter-chip>
        </div>
    </div>
    <!-- details -->
    <div class="grid gap-8 xl:grid-cols-3" :class="{ hidden: guest !== expanded }" v-for="guest in party">
        <!-- guest -->
        <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:col-span-3 xl:flex-row">
            <!-- name -->
            <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ guest }}</h1>
            <!-- amounts -->
            <div class="flex w-full flex-wrap gap-8 gap-y-2 xl:justify-end">
                <!-- subtotal -->
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ results[guest]?.subtotal }}</h1>
                    <p class="text-sm text-gunmetal transition-font dark:text-silver">(Subtotal)</p>
                </div>
                <!-- tax -->
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ results[guest]?.tax }}</h1>
                    <p class="text-sm text-gunmetal transition-font dark:text-silver">(Tax)</p>
                </div>
                <!-- tip -->
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ results[guest]?.tip }}</h1>
                    <p class="text-sm text-gunmetal transition-font dark:text-silver">(Tip)</p>
                </div>
                <!-- total -->
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-bold text-blue">${{ results[guest]?.total }}</h1>
                    <p class="text-sm text-gunmetal transition-font dark:text-silver">(Total)</p>
                </div>
            </div>
        </div>
        <!-- items -->
        <div class="flex flex-col gap-8 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:col-span-3">
            <!-- item -->
            <div class="flex flex-col gap-2" v-for="item in results[guest]?.items">
                <!-- name -->
                <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ item.name }}</h1>
                <!-- amounts -->
                <table>
                    <tbody>
                        <!-- subtotal -->
                        <tr class="border-b border-gunmetal border-opacity-25 transition dark:border-silver dark:border-opacity-25">
                            <!-- label -->
                            <td class="w-full px-4 py-2">
                                <p class="font-bold text-gunmetal transition-font dark:text-silver">Subtotal</p>
                            </td>
                            <!-- item subtotal -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ item.amounts.itemSubtotal }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;item</p>
                                </div>
                            </td>
                            <!-- split subtotal -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ item.amounts.splitSubtotal }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;person</p>
                                </div>
                            </td>
                        </tr>
                        <!-- tax -->
                        <tr class="border-b border-gunmetal border-opacity-25 transition dark:border-silver dark:border-opacity-25">
                            <!-- label -->
                            <td class="w-full px-4 py-2">
                                <p class="font-bold text-gunmetal transition-font dark:text-silver">Tax</p>
                            </td>
                            <!-- item tax -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ item.amounts.itemTax }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;item</p>
                                </div>
                            </td>
                            <!-- split tax -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ item.amounts.splitTax }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;person</p>
                                </div>
                            </td>
                        </tr>
                        <!-- tip -->
                        <tr class="border-b border-gunmetal border-opacity-25 transition dark:border-silver dark:border-opacity-25">
                            <!-- label -->
                            <td class="w-full px-4 py-2">
                                <p class="font-bold text-gunmetal transition-font dark:text-silver">Tip</p>
                            </td>
                            <!-- item tip -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ item.amounts.itemTip }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;item</p>
                                </div>
                            </td>
                            <!-- split tip -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ item.amounts.splitTip }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;person</p>
                                </div>
                            </td>
                        </tr>
                        <!-- total -->
                        <tr>
                            <!-- label -->
                            <td class="w-full px-4 py-2">
                                <p class="font-bold text-gunmetal transition-font dark:text-silver">Total</p>
                            </td>
                            <!-- item total -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-charcoal transition-font dark:text-ice">${{ item.amounts.itemTotal }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;item</p>
                                </div>
                            </td>
                            <!-- split total -->
                            <td class="w-full px-4 py-2">
                                <div class="flex items-center justify-end gap-2">
                                    <h1 class="text-xl font-bold text-blue">${{ item.amounts.splitTotal }}</h1>
                                    <p class="whitespace-nowrap text-sm text-gunmetal transition-font dark:text-silver">/&ensp;person</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
