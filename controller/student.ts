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
