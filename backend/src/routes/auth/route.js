import { auth } from "./controller.js";
import express from "express";

const authRouter = express.Router();

authRouter.post("/callback",auth);

export default authRouter;