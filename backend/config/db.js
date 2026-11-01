import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

let db
try {
    db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    })
    console.log("berhasil")
} catch (error) {
    console.error("error", error.message)
    process.exit(1);
}

export default db