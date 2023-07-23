import { Router } from "express";

export const userRouter = Router();
userRouter.route(' ')
.get((req,res)=>{
    res.send('hello tashkent')
})
.post((req,res)=>{})

userRouter
.put('/:id',(req,res)=>{})
.delete((req,res)=>{})



// userRouter.expres.get("/users", (req, res) => {
//   res.send("hello tashkent");
// });
// userRouter.expres.post("/", (req, res) => {});
// userRouter.expres.put("/", (req, res) => {});
// userRouter.expres.delete("/", (req, res) => {});
