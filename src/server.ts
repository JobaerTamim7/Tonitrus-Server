import app from "./app.js";
import dotenv from 'dotenv'

dotenv.config()


const PORT : Number = Number(process.env.PORT) || 3000;


app.listen(PORT, (error?:Error)=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})