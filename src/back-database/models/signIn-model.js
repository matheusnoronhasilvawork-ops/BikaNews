import db from "../db.js"
import bcrypt from "bcrypt"

function findUserByEmail(email) {

    const query = "select * from Users where email = ?"
    return db.promise().query(query, [email])
}

export default {
    findUserByEmail
}