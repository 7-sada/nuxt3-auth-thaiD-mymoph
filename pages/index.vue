<template>
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
        <img src="https://repository-images.githubusercontent.com/11125589/bd31cf00-70f4-11e9-9fb2-4f241568e586"
            style="width: 900px;" alt="sso" srcset="">

        <NuxtLink to="/auth">Protect pages</NuxtLink>

        <button v-if="status === 'authenticated'" @click="logout">logout</button>

        <div class="row">
            <div class="column">
                <button @click="login_thaid()">
                    <img src="https://images.droidsans.com/wp-content/uploads/2023/01/unnamed-2.webp"
                        style="width: 200px; padding: 10px;margin: 10px;" alt="sso" srcset="">
                    <h1>Login with ThaiD</h1>
                </button>
                <button @click="login_mymoph()">
                    <img src="https://mymoph.moph.go.th/assets/images/mymoph-v8-go-green.png"
                        style="width: 200px;padding: 10px;margin: 10px;" alt="sso" srcset="">
                    <h1>Login with MyMoph</h1>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth()

/**
 * Logs in to the "thaid" service.
 *
 * @return {Promise<void>} - A promise that resolves when the login process is complete.
 */
const login_thaid = async () => {
    await signIn("thaid")
}

/**
 * Logs in to the "mymoph" service.
 *
 * @return {Promise<void>} A promise that resolves when login is successful.
 */
const login_mymoph = async () => {
    await signIn("mymoph")
}

/**
 * Logout the user.
 *
 * @return {Promise<void>} A promise that resolves when the user is successfully logged out.
 */
const logout = async () => {
    await signOut()
}

</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    flex-direction: column;
    height: 100vh;
}

.column {
    margin-top: 50px;
    flex: 50%;
    padding: 10px;
    height: 300px;
}

* {
    box-sizing: border-box;
}

.row {
    display: flex;
    justify-items: center;
}
</style>