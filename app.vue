<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <!--Main Application-->
      <div v-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-10">

          <!-- Left sidebar-->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft/>
            </div>
          </div>

          <!-- Main content-->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
              <RouterView></RouterView>
          </main>


          <!-- Right sidebar-->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight/>
            </div>
          </div>

          

        </div>
    </div>

    <AuthPage v-else />
  </div>
  </div>
</template>

<script setup>

  const { useAuthUser, initAuth } = useAuth()
  const user = useAuthUser()

  const darkMode = ref(false)

  const handleDarkMode = () => {
    darkMode.value = !darkMode.value
  }

  onBeforeMount(() => {
    initAuth()
  })
  
</script>
