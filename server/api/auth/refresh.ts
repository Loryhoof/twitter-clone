import { getRefreshTokenByToken } from "~/prisma/db/refreshTokens"
import { getUserById } from "~/prisma/db/users"
import { decodeRefreshToken } from "~/server/utils/jwt"

export default defineEventHandler(async (event) => {

    const cookies = parseCookies(event)

    const refreshToken = cookies.refresh_token

    if(!refreshToken) {
        return sendError(event, createError({statusCode: 401, statusMessage: "No refresh token found"}))
    }

    const rToken = await getRefreshTokenByToken(refreshToken)
    
    if(!rToken) {
        return sendError(event, createError({statusCode: 401, statusMessage: "No matching refresh token found in db"}))
    }

    const token = decodeRefreshToken(refreshToken) as any


    try {
        const user = await getUserById(token.userId)

        const {accessToken} = generateTokens(user)

        return {
            accessToken: accessToken
        }

    } catch (err) {
        return sendError(event, createError({statusCode: 500, statusMessage: "Internal error"}))
    }
    
    return {
        hello: token
    }
})