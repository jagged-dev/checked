<script setup lang="ts">
import Brand from "@/components/icons/Brand.vue";
import GitHub from "@/components/icons/GitHub.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";
</script>

<template>
    <div class="flex flex-col gap-8 p-8">
        <!-- heading -->
        <h1 class="text-3xl font-bold leading-none text-charcoal transition-font dark:text-ice">About</h1>
        <!-- description -->
        <div class="flex flex-col gap-4">
            <p class="text-gunmetal transition-font dark:text-silver">
                It's no secret that checks can become quite complicated to split, especially with larger groups and with multiple people paying.
                <b>checked</b> is a free to use application that is aimed at combatting this issue and is designed to help groups split large checks both accurately and hassle-free.
            </p>
            <p class="text-gunmetal transition-font dark:text-silver">
                To use this application, users must enter the name of the event, enter each guest in the party, enter the amounts given from the check, and enter each item that was ordered. Users must then specify who ordered each item. From there, the application will perform the necessary calculations and then
                display the final results of how much each guest owes. For a more detailed guide, please visit the
                <RouterLink :to="{ name: 'learn' }">
                    <b class="text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue">Learn More</b>
                </RouterLink>
                section.
            </p>
            <p class="text-gunmetal transition-font dark:text-silver">
                This project was developed with
                <a class="font-bold text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" href="https://vuejs.org" target="_blank">Vue.js</a>
                and utilizes
                <a class="font-bold text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" href="https://m3.material.io/develop/web" target="_blank">Material Web</a>
                components. If you would like to take a look at this project's source code, you can do so
                <a class="font-bold text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" href="https://github.com/jagged-dev/checked" target="_blank">here</a>.
            </p>
        </div>
        <!-- heading -->
        <h1 class="text-lg font-bold leading-none text-charcoal transition-font dark:text-ice">Meet the Developer</h1>
        <!-- avatar -->
        <div class="flex flex-col items-center gap-8 xl:flex-row">
            <img class="h-32 w-32 rounded-full" src="/assets/images/avatar.jpg" />
            <div class="flex flex-col items-center gap-2 xl:items-start">
                <h1 class="text-lg font-bold text-charcoal transition-font dark:text-ice">Jonathan Giang</h1>
                <h1 class="font-bold text-gunmetal transition-font dark:text-silver">Full-Stack Software Engineer</h1>
            </div>
        </div>
        <!-- bio -->
        <div class="flex flex-col gap-4">
            <p class="text-gunmetal transition-font dark:text-silver"><b>checked</b> was developed as a part of my ongoing side venture, <b>jagged creations</b>, a growing portfolio of passion projects that I develop in hopes of offering tools that are useful, intuitive, and modern.</p>
            <p class="text-gunmetal transition-font dark:text-silver">If you like what you see, feel free to check out my portfolio along with some of my online profiles:</p>
            <div class="flex flex-col pl-4">
                <a class="w-min font-bold text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" href="https://jagged-dev.github.io/portfolio" target="_blank">
                    <div class="flex gap-4 p-4">
                        <Brand />
                        Porfolio
                    </div>
                </a>
                <a class="w-min font-bold text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" href="https://github.com/jagged-dev" target="_blank">
                    <div class="flex gap-4 p-4">
                        <GitHub />
                        GitHub
                    </div>
                </a>
                <a class="w-min font-bold text-charcoal transition-font hover:text-blue dark:text-ice dark:hover:text-blue" href="https://linkedin.com/in/jonathan-giang" target="_blank">
                    <div class="flex gap-4 p-4">
                        <LinkedIn />
                        LinkedIn
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
