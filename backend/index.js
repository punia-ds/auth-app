import express from "express";
import cors from 'cors';
import authRouter from "./src/routes/auth/route.js";

const app=express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/auth",authRouter);


app.get("/api/test", (req,res)=>{
    res.send("API is working")
})



const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));