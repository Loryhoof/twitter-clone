import jwt from "jsonwebtoken"

const generateAccessToken = (user: any) => {
    const config = useRuntimeConfig()

    return jwt.sign(
        {
            userId: user.id
        }, 
        config.jwtAccessSecret,
        {
            expiresIn: '10m'
        }
    )
}

const generateRefreshToken = (user: any) => {
    const config = useRuntimeConfig()

    return jwt.sign(
        {
            userId: user.id
        }, 
        config.jwtRefreshSecret,
        {
            expiresIn: '4h'
        }
    )
    
}

export const decodeRefreshToken = (token: string) => {
    const config = useRuntimeConfig()
    
    try {
        return jwt.verify(token, config.jwtRefreshSecret)
    } catch (err) {
        return null
    }
}

export const decodeAccessToken = (token: string) => {
    const config = useRuntimeConfig()
    
    try {
        return jwt.verify(token, config.jwtAccessSecret)
    } catch (err) {
        return null
    }
}

export const generateTokens = (user: any) => {

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}

export const sendRefreshToken = (event: any, token: any) => {
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
}