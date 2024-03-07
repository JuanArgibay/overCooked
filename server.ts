import express from "express";
import "dotenv/config";
import type { Application, NextFunction, Request, Response } from "express";
import { userRouter } from "./src/shared/infraestructure/restApi/userRouter.ts";
import { exceptionHandler } from "./src/shared/aplicación/middlewares/exceptionHandler.ts";

const { PORT } = process.env;

export const app: Application = express();
app.use(express.json());

app.use("/user", userRouter);

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  exceptionHandler(err, res);
  next();
});

app.use((_: Request, res: Response) => {
  res.status(404).send({
    message: "No encontrado",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
