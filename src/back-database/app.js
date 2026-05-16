import express from 'express';
import db from './db.js';
import signUpController from './controller/signup-controller.js';
import signInController from './controller/signIn-controller.js'
import createNewController from './controller/createNew-controller.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

app.get('/teste', (req, res) => {
    res.send('Hello World!');
});

//----------------------- signup --------------------------

app.post('/signup', async (req, res) => {

    try {
        const { name, email, password, role_id, phone, stateName, cityName } = req.body;

        const result = await signUpController.CreateUser(name, email, password, role_id, phone, stateName, cityName);

        if (result) {
            console.log('user created with id: ' + result.insertId)
            res.status(201).json({ message: 'User created successfully', userCreated: result.insertId });
        } else {
            res.status(500).json({ error: 'Error inserting user' });
        }
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message });
    }
});

app.delete('/delete-user/:id', async (req, res) => {

    try {

        console.log('🔥 ENTREI NA ROTA DELETE');
        const { id } = req.params;

        const result = await signUpController.deleteUserById(id)

        console.log('user deleted with id: ' + id)
        return res.status(200).json({ message: 'User deleted successfully' });

    } catch (error) {

        console.log('FULL ERROR:', error);
        return res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
    }

})

//------------------------------- signin ----------------------------

app.post('/signin', async (req, res) => {

    try {

        console.log(req.body)
        const {email, password} = req.body
        const result = await signInController.signIn(email, password)

        return res.status(200).json({ message: "signIn successfully"})

    } catch (error) {
        console.log("full error", error)
        return res.status(error.status).json({ error: error.message})
    }
})

//------------------------ create news --------------------------

app.post('/create-new', async (req, res) => {

    try {

        console.log("rodando: ", req.body)
        
        const { title, mainImage, userId, categoryId, texts, images } = req.body

        const result = await createNewController.createNew(title, mainImage, userId, categoryId, texts, images)
        return res.status(201).json({ message: "new created successfully"})
    } catch (error) {
        console.log("full error", error)
        return res.status(error.status).json({ error: error.message})
    }
})
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
