import { Router } from "express";
import { postStudent, getStudents, updateStudent } from "../controller/student";

export const studentRouter: Router = Router();

studentRouter.post("/", postStudent);
studentRouter.get("/", getStudents);
studentRouter.put("/:first_name", updateStudent);