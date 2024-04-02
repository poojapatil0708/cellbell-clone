import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './api/user';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/', userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});