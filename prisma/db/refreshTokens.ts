import { prisma } from ".";
import type { RefreshTokenInterface } from "../interfaces/RefreshTokenInterface";

export const createRefreshToken = (refreshToken: RefreshTokenInterface) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
}

export const getRefreshTokenByToken = (token: string) => {
    return prisma.refreshToken.findUnique({
        where: {
            token: token
        }
    })
}