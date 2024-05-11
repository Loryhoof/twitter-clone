<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 my-2 hover:bg-blue-50 rounded-full
        dark:hover:bg-gray-400/10 w-min" :class="defaultTransition">
            <nuxt-link to="/">
                <LogoTwitter />
            </nuxt-link>
        </div>

        <div class="mt-2 space-y-3">

            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon/>
                </template>

                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <HashtagIcon/>
                </template>

                <template v-slot:name>
                    Explore
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BellIcon/>
                </template>

                <template v-slot:name>
                    Notifications
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <InboxIcon/>
                </template>

                <template v-slot:name>
                    Messages
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BookmarkIcon/>
                </template>

                <template v-slot:name>
                    Bookmarks
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <DocumentTextIcon/>
                </template>

                <template v-slot:name>
                    Lists
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <UserIcon/>
                </template>

                <template v-slot:name>
                    Profile
                </template>
            </SidebarLeftTab>
        </div>
    </div>
</template>

<script setup>

    import { BellIcon, HashtagIcon, HomeIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon } from "@heroicons/vue/24/solid"
    
    const { defaultTransition } = useTailwindConfig()

</script>