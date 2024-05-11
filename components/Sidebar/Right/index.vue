<template>
    <div class="flex flex-col p-4">

        <!--Top Search Bar-->
        <!-- <div class="flex bg-gray-200 p-2 rounded-full w-full">
            <MagnifyingGlassIcon class="w-6 h-6"></MagnifyingGlassIcon>
            <input class="ml-2 bg-transparent outline-none w-full" placeholder="Search Twitter" type="text">
        </div> -->

        <!-- Preview Card : What's happening -->
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="whatshappening in whatshappeningItems">
                <h2 class="font-bold">{{whatshappening.title}}</h2>
                <p class="text-xs">{{whatshappening.count}}</p>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <!-- Preview Card : Who to follow -->
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whotofollow in whotofollowItems">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-row">
                        <img class='w-12 h-12 rounded-full' :src="whotofollow.imageUrl" alt="profile"/>
                        <div class="flex flex-col ml-3">
                            <p class="font-bold">{{whotofollow.name}}</p>
                            <p class="text-gray-500">@{{whotofollow.name.split(' ')[0]}}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button class="bg-black dark:bg-white rounded-full text-white dark:text-black px-4 py-2 font-bold hover:bg-gray-800">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        


    </div>
</template>

<script setup lang="ts">
    import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

    const whatshappeningItems = ref([
        {
            title: 'SpaceX',
            count: '18.8k Tweets'
        },
        {
            title: '#CodingIsFun',
            count: '9.2k Tweets'
        },
        {
            title: 'Dogs',
            count: '2.4k Tweets'
        }
    ])

    const whotofollowItems = ref([
        {
            name: 'Elon Musk',
            imageUrl: 'https://people.csail.mit.edu/billf/project%20pages/sresCode/Markov%20Random%20Fields%20for%20Super-Resolution_files/100075_lowres.jpg'
        },
        {
            name: 'Dedlon Wusk',
            imageUrl: 'https://people.csail.mit.edu/billf/project%20pages/sresCode/Markov%20Random%20Fields%20for%20Super-Resolution_files/100075_lowres.jpg'
        },
        {
            name: 'Caral Kusk',
            imageUrl: 'https://people.csail.mit.edu/billf/project%20pages/sresCode/Markov%20Random%20Fields%20for%20Super-Resolution_files/100075_lowres.jpg'
        }
    ])

</script>