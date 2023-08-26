<script setup lang="ts">
function switchTabs(event: any) {
    for (let tab of event.target.children) {
        tab.setAttribute("data-selected", tab.selected ? "true" : "false");
    }
}
</script>

<template>
    <div class="flex flex-col gap-8 p-8">
        <!-- tabs -->
        <md-tabs class="rounded-full bg-ice dark:bg-charcoal" @change="switchTabs">
            <md-tab class="h-20 rounded-full bg-blue transition-background data-[selected=false]:bg-transparent data-[selected=true]:bg-blue">
                <div class="flex items-center gap-2"><md-icon slot="icon">attach_money</md-icon>Amounts</div>
            </md-tab>
            <md-tab class="h-20 rounded-full transition-background data-[selected=true]:bg-blue">
                <div class="flex items-center gap-2"><md-icon slot="icon">person</md-icon>People</div>
            </md-tab>
            <md-tab class="h-20 rounded-full transition-background data-[selected=true]:bg-blue">
                <div class="flex items-center gap-2"><md-icon slot="icon">restaurant</md-icon>Food</div>
            </md-tab>
        </md-tabs>

        <!-- button -->
        <div class="flex gap-2">
            <md-elevated-button>Elevated</md-elevated-button>
            <md-filled-button>Filled</md-filled-button>
            <md-filled-tonal-button>Tonal</md-filled-tonal-button>
            <md-outlined-button>Outlined</md-outlined-button>
            <md-text-button>Text</md-text-button>
        </div>

        <!-- fab -->
        <div class="flex gap-2">
            <md-fab><md-icon slot="icon">add</md-icon></md-fab>
            <md-fab label="Add"><md-icon slot="icon">add</md-icon></md-fab>
            <md-fab variant="primary"><md-icon slot="icon">add</md-icon></md-fab>
            <md-fab variant="primary" label="Add"><md-icon slot="icon">add</md-icon></md-fab>
            <md-fab variant="secondary"><md-icon slot="icon">add</md-icon></md-fab>
            <md-fab variant="secondary" label="Add"><md-icon slot="icon">add</md-icon></md-fab>
            <md-fab variant="tertiary"><md-icon slot="icon">add</md-icon></md-fab>
            <md-fab variant="tertiary" label="Add"><md-icon slot="icon">add</md-icon></md-fab>
            <md-branded-fab>
                <svg slot="icon" viewBox="0 0 36 36">
                    <path fill="#34A853" d="M16 16v14h4V20z"></path>
                    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                    <path fill="none" d="M0 0h36v36H0z"></path>
                </svg>
            </md-branded-fab>
            <md-branded-fab label="Add">
                <svg slot="icon" viewBox="0 0 36 36">
                    <path fill="#34A853" d="M16 16v14h4V20z"></path>
                    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                    <path fill="none" d="M0 0h36v36H0z"></path>
                </svg>
            </md-branded-fab>
        </div>

        <!-- icon button -->
        <div class="flex gap-2">
            <md-icon-button><md-icon>edit</md-icon></md-icon-button>
            <md-filled-icon-button><md-icon>edit</md-icon></md-filled-icon-button>
            <md-filled-tonal-icon-button><md-icon>edit</md-icon></md-filled-tonal-icon-button>
            <md-outlined-icon-button><md-icon>edit</md-icon></md-outlined-icon-button>
        </div>

        <!-- elevation / focus / ripple -->
        <button class="relative h-16 w-16 rounded-2xl bg-ice dark:bg-charcoal" style="--md-elevation-level: 3">
            <md-elevation></md-elevation>
            <md-ripple></md-ripple>
        </button>

        <!-- switch -->
        <div class="flex gap-2">
            <md-switch></md-switch>
            <md-switch selected></md-switch>
            <md-switch icons></md-switch>
            <md-switch icons selected></md-switch>
        </div>

        <!-- checkbox / radio -->
        <div class="flex gap-4">
            <label class="flex gap-2 text-charcoal dark:text-ice">
                <md-checkbox class="my-auto"></md-checkbox>
                Checkbox
            </label>
            <label class="flex gap-2 text-charcoal dark:text-ice">
                <md-radio class="my-auto"></md-radio>
                Radio
            </label>
        </div>

        <!-- chips -->
        <div class="flex gap-2">
            <md-assist-chip label="Assist"></md-assist-chip>
            <md-filter-chip label="Filter"></md-filter-chip>
            <md-input-chip label="Input"></md-input-chip>
            <md-suggestion-chip label="Suggestion"></md-suggestion-chip>
        </div>

        <!-- text field -->
        <div class="flex gap-2">
            <md-filled-text-field label="Filled"></md-filled-text-field>
            <md-outlined-text-field label="Outlined"></md-outlined-text-field>
        </div>

        <!-- select -->
        <div class="flex gap-2">
            <md-filled-select>
                <md-select-option headline="Option 1"></md-select-option>
                <md-select-option headline="Option 2"></md-select-option>
                <md-select-option headline="Option 3"></md-select-option>
            </md-filled-select>
            <md-outlined-select>
                <md-select-option headline="Option A"></md-select-option>
                <md-select-option headline="Option B"></md-select-option>
                <md-select-option headline="Option C"></md-select-option>
            </md-outlined-select>
        </div>
    </div>
</template>

<style scoped></style>
