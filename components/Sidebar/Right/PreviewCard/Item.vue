<template>
    <div class="p-3 border-b w-full hover:bg-gray-100 dark:hover:bg-dim-350 cursor-pointer" :class="wrapperClasses">
        <slot></slot>
    </div>
</template>

<script setup>

    const { defaultTransition, twitterBorderColor } = useTailwindConfig()

    const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)

</script>