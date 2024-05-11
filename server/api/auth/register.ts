import { createUser } from "~/prisma/db/users"
import { UserData } from "~/prisma/interfaces/UserData"
import { userTransformer } from "~/server/transformers/user"

export default defineEventHandler( async (event) => {
    const {username, name, email, password} : UserData = await readBody(event)

    if(!username || !email || !name || !password) {
        return sendError(event, createError({ statusCode: 400, statusMessage: "Invalid or incomplete request body"}))
    }

    const userData : UserData = {
        username: username,
        email: email,
        name: name,
        password: password,
        profileImage: 'https://people.csail.mit.edu/billf/project%20pages/sresCode/Markov%20Random%20Fields%20for%20Super-Resolution_files/100075_lowres.jpg'
    }

    const user = await createUser(userData)
    
    return {
        body: userTransformer(user)
    }
})