export default () => {

    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    } 

    const login = ({ username, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await $fetch('/api/auth/login', {
                    method: "POST",
                    body: {
                        username,
                        password,
                    }
                });

                const {accessToken, user} = response

                setToken(accessToken)
                setUser(user)

                resolve(true)
            } catch (error) {
                reject(error);
            }
        });
    };

    const refreshToken = () => {
        return new Promise( async (resolve, reject) => {
            try {

                const response = await $fetch('/api/auth/refresh')
                
                const { accessToken } = response

                setToken(accessToken)
                resolve(true)

            } catch (err) {
                reject(err)
            }
        })
    }

    const getUser = () => {
        return new Promise( async (resolve, reject) => {
            try {

                const response = await useFetchApi('/api/auth/user')
                
                const { user } = response

                setUser(user)
                resolve(true)

            } catch (err) {
                reject(err)
            }
        })
    }

    const initAuth = () => {
        return new Promise( async (resolve, reject) => {
            try {

                await refreshToken()
                await getUser()


                resolve(true)

            } catch (err) {
                reject(err)
            }
        })
    }

    return { login, useAuthUser, useAuthToken, initAuth };
};
