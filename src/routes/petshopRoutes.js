import { Router } from "express";
import * as petshopControllers from "../controllers/petshopControllers.js";

const router = Router();

router.get("/", petshopControllers.listarTodosPets);
router.get("/:id", petshopControllers.listarPetPorId);

export default router;
