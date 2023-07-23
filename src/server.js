import express from "express";
import { userRouter } from "./router/userrouter.js";

const expres = express();


function logger(req, res, next){
    console.log(req.url,req.method);
    next()
}
expres.use('/users', logger,userRouter)



expres.listen(2000, console.log("2000 port create server"))