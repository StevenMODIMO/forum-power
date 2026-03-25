import User from "../models/user";
import { Request, Response } from "express";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { put } from "@vercel/blob";

dotenv.config();

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id: any) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: maxAge });
};

const createNewUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
};

const loginUser = async (req: Request, res: Response) => {}

const logoutUser = async (req: Request, res: Response) => {}