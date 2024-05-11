<template>
    <div class="flex h-screen items-center justify-center">
        <div class="flex flex-col">
            <h1 class="mb-12 text-center text-3xl">Login</h1>
            <input v-model="usernameRef" class="border rounded-full bg-gray-100 px-4 py-2 mb-2" placeholder="Username" type="text"/>
            <input v-model="passwordRef" class="border rounded-full bg-gray-100 px-4 py-2 mb-2" placeholder="Password" type="password"/>
            <button @click="handleLogin" class="border rounded-full bg-black text-white p-2 font-semibold">Login</button>

            <p class="text-red-500 mt-4" v-if="errorRef">{{ errorRef }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

    const usernameRef = ref("")
    const passwordRef = ref("")
    const errorRef = ref("")

    const handleLogin = async () => {

        const { login } = useAuth()

        try {

            let lala = await login({
                username: usernameRef.value,
                password: passwordRef.value
            })

            console.log(lala, "LALALA")

        } catch (err) {
            console.log(err)
        }
    }

</script>