import { prisma } from ".";
import type { UserData } from "../interfaces/UserData";
import bcrypt from "bcrypt"


export const createUser = (userData: UserData) => {
    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }

    return prisma.user.create({
        data: finalUserData
    })
}

export const getUserByUsername = (username: string) => {
    
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}

export const getUserById = (userId: any) => {
    
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}