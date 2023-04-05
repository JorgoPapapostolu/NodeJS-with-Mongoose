import { Router } from "express";
import { postStudent } from "../controller/student";

export const studentRouter: Router = Router();

studentRouter.post("/", postStudent);
