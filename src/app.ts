import express from "express"
import cors from 'cors'
import UserRouter from "./Routes/Users/UserRouter"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/user",UserRouter)

export default app;
