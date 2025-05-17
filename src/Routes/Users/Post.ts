import { Request, Response } from "express"
import { connectDB } from "../../Config/Database.js"
import { User } from "../../Models/User.js";

const addUser = async (req : Request, res: Response)=>{
    const db = await connectDB();
    const userCollection = db.collection('users');

    try{
        const newUser : User = req.body;
        const result = await userCollection.insertOne(newUser)
        res.status(201).send(result)
    } 
    
    catch(error){
        if(error instanceof Error){
            console.error(error.message)
        }
        res.status(500).send({message: "Something went wrong"})
    }
}


export {addUser}