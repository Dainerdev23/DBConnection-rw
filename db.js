import mysql from 'mysql2/promise';
import 'dotenv/config';

// export const connection = await mysql.createConnection({
//     host: process.env.BD_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME

// });

export const pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false

    }
});


// export const pool =  mysql.createPool({
//     host: process.env.BD_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     connectionLimit: 10
// });