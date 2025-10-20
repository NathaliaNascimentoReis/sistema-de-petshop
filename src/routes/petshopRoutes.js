import { Router } from "express";
import * as petshopControllers from "../controllers/petshopControllers.js";

const router = Router();

router.get("/", petshopControllers.listarTodosPets);

export default router;
