import { getAllForums } from "../controllers/controllers";
import { Router } from "express";

const router = Router();

router.get("/forums", getAllForums);

export default router;
