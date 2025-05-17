import { Router } from "express";
import { getAllUsers, getUserByID } from "./Get";
import { addUser } from "./Post";

const UserRouter : Router = Router();


UserRouter.get("/",getAllUsers)
UserRouter.get("/:id",getUserByID)
UserRouter.post("/",addUser)

export default UserRouter