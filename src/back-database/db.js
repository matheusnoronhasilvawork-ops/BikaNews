import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mns@74582',
    database: 'BikaNews'
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return
    }
    console.log('Connected to the database');
})

export default connection;