import bcrypt from 'bcrypt';
import model from '../models/signUp-model.js';

async function CreateUser(name, email, password, role_id) {

    if (!name || !email || !password || !role_id) {
        throw { status: 400, message: 'need to fill all the fields' }
    } else if (name.length > 100 || email.length > 100 || password.length > 20 || name.length < 3 || password.length < 5) {
        throw { status: 400, message: 'Some variable has an invalid length' };
    } else {
        const existingUser = await model.findUserByEmail(email);

        if (existingUser[0].length > 0) {
            throw { status: 400, message: 'User already exists' };
        } else {
            const [result] = await model.signUp(name, email, password, role_id);

            if (result) {
                return result;
            } else {
                throw { status: 500, message: 'Error inserting user' };
            }
        }
    }
};

export default {
    CreateUser
}