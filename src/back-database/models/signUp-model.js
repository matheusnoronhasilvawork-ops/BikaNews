import db from '../db.js';
import bcrypt from 'bcrypt';

async function signUp(name, email, password, role_id, phone, state_id, city_id) {
    const hashPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, email, password, role_id, phone, state_id, city_id) VALUES (?, ?, ?, ?, ?, ?, ?)';    
    return db.promise().query(query, [name, email, hashPassword, role_id, phone, state_id, city_id]);
};

async function findUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    return db.promise().query(query, [email]);
};

async function findStateByName(stateName) {
    const query = 'select * from States where name = ?'
    return db.promise().query(query, [stateName])
}

async function findCityName(cityName) {
    const query = 'select * from Cities where name = ?'
    return db.promise().query(query, [cityName])
}

async function createState(stateName) {
    const query = 'insert into States (name) values (?)'
    return db.promise().query(query, [stateName])
}

async function createCity(cityName, stateId) {
    const query = 'insert into Cities (name, state_id) values (?, ?)'
    return db.promise().query(query, [cityName, stateId])
}

async function deleteUserById(id) {
    const query = 'delete from users where id = ?'
    return db.promise().query(query, [id])
}

export default  {
    signUp,
    findUserByEmail,
    findStateByName,
    findCityName,
    createState,
    createCity,
    deleteUserById
}