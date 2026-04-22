import db from '../db.js';
import bcrypt from 'bcrypt';

async function signUp(name, email, password, role_id) {
    // const hash = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, email, password, role_id, state_id, country_id, phone) VALUES (?, ?, ?, ?, ?, ?, ?)';
    return db.promise().query(query, [name, email, password, role_id, 1, 1, '']);
};

async function findUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    return db.promise().query(query, [email]);
};

async function deleteUserById(id) {
    const query = 'delete from users where id = ?'
    return db.promise().query(query, [id])
}

export default  {
    signUp,
    findUserByEmail,
    deleteUserById
}