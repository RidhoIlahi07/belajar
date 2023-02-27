import express from "express";
import { createUser } from "../controllers/UserControlers.js";

const userRoute = express.Router();

userRoute.post('/users', createUser);

export default userRoute;