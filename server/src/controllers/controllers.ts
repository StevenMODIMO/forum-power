import { Request, Response } from "express";
import Forum from "../models/forum";

const getAllForums = async (req: Request, res: Response) => {
  try {
    const forums = await Forum.find();
    res.status(200).json(forums);
  } catch (error) {
    res.status(400).json({ message: "Forums couldn't be fetched." });
  }
};

const postNewForum = async (req: Request, res: Response) => {}

export { getAllForums };
