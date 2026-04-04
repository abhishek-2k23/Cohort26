import { Router } from "express";

const router = Router();

import AuthController from "./auth.controller";
const authenticationController = new AuthController();

router.post("/register", authenticationController.registerController.bind(authenticationController));

export default router;