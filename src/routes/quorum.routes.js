import { Router } from "express";
import { getLista, getQuorum, getValor } from "../controllers/quorum.controller";
const router = Router();


router.get("/", getQuorum)
router.get("/lista", getLista)
router.get("/valor", getValor)

export default router;