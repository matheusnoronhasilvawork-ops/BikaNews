import express from 'express';
import db from './db.js';
import signUpController from './controller/signup-controller.js';

const app = express();
app.use(express.json());

app.get('/teste', (req, res) => {
    res.send('Hello World!');
});

app.post('/signup', async (req, res) => {

    try {
        const { name, email, password, role_id } = req.body;

        const result = await signUpController.CreateUser(name, email, password, role_id, res);

        if (result) {
            res.status(201).json({ message: 'User created successfully', userCreated: result.insertId });
        } else {
            res.status(500).json({ error: 'Error inserting user' });
        }
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});