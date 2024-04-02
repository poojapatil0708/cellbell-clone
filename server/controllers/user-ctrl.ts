import { Request, Response } from "express";
import { createUser } from "../services/user-services";

export const loginController = (req: Request, res: Response) => {
    createUser();
    return res.status(200).send('OK')
}