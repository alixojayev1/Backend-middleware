import express from "express"
import router from "./router/urouter.js";

const expres = express();
expres.use(express.json())
expres.use(router)


expres.listen(3000, console.log("create server 3000"))