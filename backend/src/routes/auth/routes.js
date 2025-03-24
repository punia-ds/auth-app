import { auth } from "./controller.js";
import express from "express";

const authRouter = express.Router();

authRouter.post("/auth/callback",auth);

export default authRouter;