import express, { Request, Response, NextFunction } from "express";
import Student from "../models/student";

export const postStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, first_name, email } = req.body;
  try {
    const newStudent = await Student.create({
      name,
      first_name,
      email,
    });
    res.json({ data: newStudent });
  } catch (error) {
    next(error);
  }
};

export const getStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const students = await Student.find({});
    res.json({ data: students });
  } catch (error) {
    next(error);
  }
};

export const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { first_name } = req.body;
  try {
    const updatedStudent = await Student.findOneAndUpdate({
      first_name,
    });
    res.json({ data: updateStudent });
  } catch (error) {
    next(error);
  }
};
