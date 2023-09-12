import { Router } from "express";
import { verifyDataBody } from "../middlewares/verify.middlewares";
import { userDataRegisterSchema } from "../schemas/usuario.schema";
import { createUser, getUserList } from "../controllers/usuario.controllers";
import { verifyTokenUser, verifyUserAdmin } from "../middlewares/validation.middlewares";

const usuarioRouter = Router();

usuarioRouter.post("", verifyDataBody(userDataRegisterSchema), createUser);
usuarioRouter.get("", verifyTokenUser, verifyUserAdmin, getUserList);

export default usuarioRouter;
