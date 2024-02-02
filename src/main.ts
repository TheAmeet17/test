import express, { NextFunction, Request, Response } from "express";
import todosRouter from './routes/todo.router'
import admin from './routes/auth.router'
import buildError from "./utils/build-error";
import userRouter from "./routes/auth.router"
import cors from 'cors'
const app = express();

app.use(express.json());  //adds middleware to the Express application

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server ready at:http://localhost:${PORT}`)
})  //This line starts the Express server, making it listen on the specified port (3001).


app.use(cors())
app.use ('/todos',todosRouter) 
 //This line tells the Express application to use the todosRouter for any routes that start with '/todos'
app.use('/user',userRouter)


//app.use('/admin',admin)


app.use((err: any, req: Request, res: Response, next:NextFunction) =>{
   const error = buildError(err)
        res.status(error.code).json({error})
    }
);

export default app

