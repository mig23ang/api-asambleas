import { Router } from "express";
const router = Router();

import * as preguntasCtrl from "../controllers/pregunta.controller";
//import { authJwt } from "../middlewares";

router.get("/", preguntasCtrl.getPreguntas);

router.get("/:preguntaId", preguntasCtrl.getPreguntaById);

router.post(
  "/",
  // [authJwt.verifyToken, authJwt.isModerator],
  preguntasCtrl.createPregunta
);

router.put(
  "/:preguntaId",
  // [authJwt.verifyToken, authJwt.isModerator],
  preguntasCtrl.updatePreguntaById
);

router.delete(
  "/:productId",
  // [authJwt.verifyToken, authJwt.isAdmin],
  preguntasCtrl.deletePreguntaById
);

export default router;