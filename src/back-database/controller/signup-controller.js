import bcrypt from 'bcrypt';
import model from '../models/signUp-model.js';

async function CreateUser(name, email, password, role_id, phone, stateName, cityName) {

    if (!name || !email || !password || !role_id || !phone || !stateName || !cityName) {
        throw { status: 400, message: 'need to fill all the fields' }
    }

    if (name.length > 100 || email.length > 100 || password.length > 20 || name.length < 3 || password.length < 5) {
        throw { status: 400, message: 'Some variable has an invalid length' };
    }

    const existingUser = await model.findUserByEmail(email);

    if (existingUser[0].length > 0) {
        throw { status: 400, message: 'User already exists' };
    }

    const existingState = await model.findStateByName(stateName);
    const existingCity = await model.findCityName(cityName);

    let stateId;
    let cityId;

    console.log('estado encontrado:', existingState[0]);
    console.log('cidade encontrada:', existingCity[0]);

    if (existingState[0].length === 0) {
        console.log('exisiting', existingState)
        const [createStateResult] = await model.createState(stateName);
        stateId = createStateResult.insertId;

        console.log('estado criado:', stateId);
    } else {
        console.log('exisiting', existingState)
        stateId = existingState[0][0].id;

        console.log('estado já existe:', stateId);
    }

    if (existingCity[0].length === 0) {
        console.log('exisiting', existingCity)
        const [createCityResult] = await model.createCity(cityName, stateId);
        cityId = createCityResult.insertId;

        console.log('cidade criada:', cityId);
    } else {
        console.log('exisiting', existingCity)
        cityId = existingCity[0][0].id;

        console.log('cidade já existe:', cityId);
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if(!validEmail) {
        throw { status: 400, message: "type a valid email"}
    }

    const [result] = await model.signUp(
        name,
        email,
        password,
        role_id,
        phone,
        stateId,
        cityId
    );

    if (!result) {
        throw { status: 500, message: 'Error inserting user' };
    }

    return result;
}

async function deleteUserById(id) {
    if (!id) {
        throw { status: 400, message: 'id is required' }
    } else {
        const [result] = await model.deleteUserById(id);

        console.log('affectrow: ' + result.affectedRows)

        if (result.affectedRows === 0) {
            throw { status: 404, message: 'User not found or already deleted' };
        } else {
            console.log('passou')
            return result
        }
    }
}

export default {
    CreateUser,
    deleteUserById
}