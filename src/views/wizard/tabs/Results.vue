<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
    event: String,
    party: Array<string>,
    check: Object,
    food: Array<any>,
});

const results = ref<any>({});
const expanded = ref();

onMounted(() => {
    if (props.event && props.party && props.check && props.food) {
        expanded.value = props.party[0];

        let taxPct = Number(props.check.tax) / Number(props.check.subtotal);
        let tipPct = Number(props.check.tip) / Number(props.check.subtotal);

        for (let guest of props.party) {
            results.value[guest] = {
                items: [],
                subtotal: "",
                tax: "",
                tip: "",
                total: "",
            };
        }

        for (let item of props.food) {
            let subtotal = Number(item.price) / item.guests.length;
            let tax = subtotal * taxPct;
            let tip = subtotal * tipPct;
            let total = subtotal + tax + tip;

            for (let guest of item.guests) {
                results.value[guest].items.push({
                    name: item.name,
                    subtotal: subtotal.toFixed(2),
                    tax: tax.toFixed(2),
                    tip: tip.toFixed(2),
                    total: total.toFixed(2),
                });

                results.value[guest].subtotal = Number(results.value[guest].subtotal) + subtotal;
                results.value[guest].tax = Number(results.value[guest].tax) + tax;
                results.value[guest].tip = Number(results.value[guest].tip) + tip;
                results.value[guest].total = Number(results.value[guest].total) + total;
            }
        }

        for (let guest in results.value) {
            results.value[guest].subtotal = Number(results.value[guest].subtotal).toFixed(2);
            results.value[guest].tax = Number(results.value[guest].tax).toFixed(2);
            results.value[guest].tip = Number(results.value[guest].tip).toFixed(2);
            results.value[guest].total = Number(results.value[guest].total).toFixed(2);
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
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:p-12">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ event }}</h1>
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
    <div class="flex flex-col gap-4 rounded-3xl bg-ice p-8 transition-background dark:bg-charcoal xl:p-12" :class="{ hidden: guest !== expanded }" v-for="guest in party">
        <!-- heading -->
        <h1 class="text-2xl font-bold text-charcoal transition-font dark:text-ice">{{ guest }}:&ensp;${{ results[guest]?.total }}</h1>
        <!-- items -->
        <table>
            <thead>
                <tr>
                    <th class="text-start font-bold text-charcoal transition-font dark:text-ice">Item</th>
                    <th class="text-end font-bold text-charcoal transition-font dark:text-ice">Subtotal</th>
                    <th class="text-end font-bold text-charcoal transition-font dark:text-ice">Tax</th>
                    <th class="text-end font-bold text-charcoal transition-font dark:text-ice">Tip</th>
                    <th class="text-end font-bold text-charcoal transition-font dark:text-ice">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in results[guest]?.items">
                    <td class="text-start text-gunmetal transition-font dark:text-silver">{{ item.name }}</td>
                    <td class="text-end text-gunmetal transition-font dark:text-silver">${{ item.subtotal }}</td>
                    <td class="text-end text-gunmetal transition-font dark:text-silver">${{ item.tax }}</td>
                    <td class="text-end text-gunmetal transition-font dark:text-silver">${{ item.tip }}</td>
                    <td class="text-end text-gunmetal transition-font dark:text-silver">${{ item.total }}</td>
                </tr>
                <tr>
                    <td class="text-start text-charcoal transition-font dark:text-ice">TOTAL</td>
                    <td class="text-end text-charcoal transition-font dark:text-ice">${{ results[guest]?.subtotal }}</td>
                    <td class="text-end text-charcoal transition-font dark:text-ice">${{ results[guest]?.tax }}</td>
                    <td class="text-end text-charcoal transition-font dark:text-ice">${{ results[guest]?.tip }}</td>
                    <td class="text-end text-blue">${{ results[guest]?.total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
