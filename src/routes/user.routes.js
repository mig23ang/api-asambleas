import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";


router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);
router.get("/", usersCtrl.getUsers)
router.get("/:userId", usersCtrl.getUserById)
router.get("/usuarios", usersCtrl.getUsuarios)

export default router;
