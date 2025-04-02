import { Router } from "express";

const userRoute = Router()

userRoute.get("/", (req, res) =>{
    res.json({message: "hello world"})
})












export default userRoute