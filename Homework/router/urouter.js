import { Router } from "express";
import { userDelete, userGet, userPost } from "../controller/user.js";
import { userMiddilware } from "../middleware/middelvare.js";

const router = Router();

router.get('/users',userGet);
router.delete('/users/:id',userDelete);
router.post('/users', userMiddilware,  userPost);


export default router