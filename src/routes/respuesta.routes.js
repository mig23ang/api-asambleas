import { Router } from "express";
const router = Router();

import * as respuestasCtrl from "../controllers/respuesta.controller";
import { authJwt } from "../middlewares";
import { respuestaRepetida } from "../middlewares/respuesta";



router.get("/respuesta1", respuestasCtrl.getRespuesta1);
router.get("/respuesta2", respuestasCtrl.getRespuesta2);
router.get("/respuesta3", respuestasCtrl.getRespuesta3);
router.get("/respuesta4", respuestasCtrl.getRespuesta4);
router.get("/respuesta5", respuestasCtrl.getRespuesta5);
router.get("/respuesta6", respuestasCtrl.getRespuesta6);
router.get("/respuesta7", respuestasCtrl.getRespuesta7);
router.get("/respuesta8", respuestasCtrl.getRespuesta8);
router.get("/respuesta9", respuestasCtrl.getRespuesta9);
router.get("/respuesta10", respuestasCtrl.getRespuesta10);
router.get("/respuesta11", respuestasCtrl.getRespuesta11);
router.get("/respuesta12", respuestasCtrl.getRespuesta12);
router.get("/respuesta13", respuestasCtrl.getRespuesta13);
router.get("/respuesta14", respuestasCtrl.getRespuesta14);
router.get("/respuesta15", respuestasCtrl.getRespuesta15);
router.get("/respuesta16", respuestasCtrl.getRespuesta16);
router.get("/respuesta17", respuestasCtrl.getRespuesta17);
router.get("/respuesta18", respuestasCtrl.getRespuesta18);
router.get("/respuesta19", respuestasCtrl.getRespuesta19);
router.get("/respuesta20", respuestasCtrl.getRespuesta20);

//router.get("/:respuestaId", respuestasCtrl.getRespuestaById);

router.post(
  "/",
  [authJwt.verifyToken],
  respuestasCtrl.createRespuesta
);

router.put(
  "/:respuestaId",
  [authJwt.verifyToken, authJwt.isModerator],
  respuestasCtrl.updateRespuestaById
);

router.delete(
  "/:respuestaId",
  [authJwt.verifyToken, authJwt.isAdmin],
  respuestasCtrl.deleteRespuestaById
);

export default router;
