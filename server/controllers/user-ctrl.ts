import { Request, Response } from "express";
import { createUserService } from "../services/user-services";

export const createUserController = (req: Request, res: Response) => {
    createUserService(req.body)
    .then((user) => {
        res.status(200).send(user)
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}