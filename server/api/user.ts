import { Router } from "express";
import { loginController } from "../controllers/user-ctrl";

const userRouter = Router();

userRouter.get('/login', loginController);

export default userRouter;