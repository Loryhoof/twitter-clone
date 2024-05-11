<template>
    <div class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-500" :class="twitterBorderColor">
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white">
            {{ props.title }}
        </h1>

        <slot></slot>

        <!-- <div class="p-3 text-sm text-blue-400">
            <div v-for="item in props.items">
                <p class="border-b">{{item}}</p>
            </div>
        </div> -->

        <div class="p-3 text-sm text-blue-400 cursor-pointer rounded-2xl hover:bg-gray-100 dark:hover:bg-dim-300 overflow-hidden">
            Show more
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            default: [
                "Hello",
                "Hello2"
            ]
        }
    })

    const {twitterBorderColor} = useTailwindConfig()
</script>