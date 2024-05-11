import { getUserByUsername } from "~/prisma/db/users"
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt"
import { userTransformer } from "~/server/transformers/user"
import { createRefreshToken } from "~/prisma/db/refreshTokens"

interface LoginBody {
    username: string,
    password: string
}

export default defineEventHandler( async (event) => {
    const body = await readBody(event) as LoginBody

    const {username, password} = body

    if(!username || !password) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Invalid params"}))
    }

    // Check is registered / user exists

    const user = await getUserByUsername(username)

    if (!user) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Username or password invalid"}))
    }

    // Compare passwords

    const passwordMatch = await bcrypt.compare(password, user.password)

    if(!passwordMatch) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Username or password invalid"}))
    }

    // Generate Tokens
    /// Access Token
    /// Refresh Token

    const {accessToken, refreshToken} = generateTokens(user)

    // Save it inside db

    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })
    
    // Add http only cookie

    sendRefreshToken(event, refreshToken)
    
    return {
        accessToken: accessToken,
        user: userTransformer(user)
    }

})