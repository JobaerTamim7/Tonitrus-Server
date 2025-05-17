import { Request,Response } from "express"
import { connectDB } from "../../Config/Database.js"
import { FindCursor, ObjectId } from "mongodb";
import { User } from "../../Models/User.js";

const getAllUsers = async (req?: Request, res?: Response): Promise<void> =>{
    const db = await connectDB();
    const userCollection = db.collection('users')
    const userCursor: FindCursor = userCollection.find({});
    const users: User[] = await userCursor.toArray();

    res.json(users)
}

const getUserByID = async (req?: Request, res?: Response): Promise<void> =>{
    const db = await connectDB();
    const userCollection = db.collection('users')
    const {id} = req.params

    const filter = {_id: new ObjectId(id)}

    const user : User | null = await userCollection.findOne<User>(filter)

    res.json(user)
}


export {getAllUsers,getUserByID}