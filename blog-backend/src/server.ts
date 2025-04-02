import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express"
import { configDotenv } from "dotenv"
import userRoute from "./route/userRoutes/createUser"

configDotenv()

const PORT = 3000

const app = express()

app.use(express.json())

app.use("/user", userRoute)



app.use((req, res) => {
    res.status(404).json({
        error: "Page not found",
        path: req.originalUrl
    });
});

app.use((err:ErrorRequestHandler, req:Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(404).json({message: "Error in the server"})
})



app.listen(PORT)