import { Router } from "express";
const router = Router();

import * as asambleaCtrl from "../controllers/asamblea.controller";
import { upload } from "../libs/storage";
import { authJwt } from "../middlewares";

router.get("/", asambleaCtrl.getAsambleas);

router.get("/:asambleaId", asambleaCtrl.getAsambleaById);

router.post("/", upload.single("nombreFile"), asambleaCtrl.createAsamblea);

router.put(
    "/:asambleaId",
    [authJwt.verifyToken, authJwt.isAdmin],
    asambleaCtrl.updateAsambleaById
);

router.delete(
    "/:asambleaId",
    [authJwt.verifyToken, authJwt.isAdmin],
    asambleaCtrl.deleteAsambleaById
);

export default router;
