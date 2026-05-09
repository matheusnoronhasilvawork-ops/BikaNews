import model from "../models/signIn-model.js"
import bcrypt from 'bcrypt'

async function signIn(email, password) {

    if (!email || !password) {
        throw { status: 400, message: "need to fill all the fields" }
    }

    if (password.length > 20) {
        throw { status: 400, message: "password needs to be a maximum of 20 characters" }
    }

    if (password.length < 5) {
        throw { status: 400, message: "password needs to be a minimum of 5 characters" }
    }

    const existingUser = await model.findUserByEmail(email)

    console.log(existingUser);
    if(existingUser[0].length > 0) {

        const passwordUser = existingUser[0][0].password

        console.log(passwordUser)

        const isValid =await bcrypt.compare(password, passwordUser)
        console.log('isValid: ', isValid)
        if(isValid){
            
            const [result] = existingUser[0]

            console.log(result)

            return result
        } else {
            throw { status: 400, message: "invalid password"}
        }

        
    } else {
        throw { status: 404, message: "user not find"}
    }
}

export default {
    signIn
}