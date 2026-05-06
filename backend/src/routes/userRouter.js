import { createUser, getUser } from "../constroller/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.post("/create", createUser);
userRouter.get("/get", getUser);
export default userRouter;
