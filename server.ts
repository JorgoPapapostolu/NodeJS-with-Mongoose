import express, { Application, Request, Response } from "express";
const app: Application = express();

import { studentRouter } from "./routes/student";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/student", studentRouter);

export default app;
