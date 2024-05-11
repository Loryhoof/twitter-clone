import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt"
import { getUserById } from "~/prisma/db/users"

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user'
    ]

    const isHandledByThisMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint)

        return pattern.match(event.node.req.url as any)
    })
    
    if (!isHandledByThisMiddleware) {
        return
    }

    const token = event.node.req.headers['authorization']?.split(' ')[1]

    const decoded = decodeAccessToken(token as any) as any

    if (!decoded) {
        return sendError(event, createError({statusCode: 401}))
    }

    try {
        const userId = decoded.userId
        const user = await getUserById(userId)

        event.context.auth = { user }

    } catch(err) {
        return sendError(event, createError({statusCode: 401}))
    }


})