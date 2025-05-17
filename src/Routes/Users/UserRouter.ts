import { Router } from "express";
import { getAllUsers, getUserByID } from "./Get.js";
import { addUser } from "./Post.js";

const UserRouter : Router = Router();


UserRouter.get("/",getAllUsers)
UserRouter.get("/:id",getUserByID)
UserRouter.post("/",addUser)

export default UserRouter