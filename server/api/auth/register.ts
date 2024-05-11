interface RequestBody {
    username: string,
    name: string,
    email: string,
    password: string
}

export default defineEventHandler( async (event) => {
    const {username, name, email, password} : RequestBody = await readBody(event)
    
    if(!username || !email || !name || !password) {
        return sendError(event, createError({ statusCode: 400, statusMessage: "Invalid or incomplete request body"}))
    }
    
    return {
        body: username
    }
})