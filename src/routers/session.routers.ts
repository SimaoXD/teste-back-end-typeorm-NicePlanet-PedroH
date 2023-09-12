import { Router } from "express";
import { verifyDataBody } from "../middlewares/verify.middlewares";
import { userDataLogSchema } from "../schemas/usuario.schema";
import { sessionLogUser } from "../controllers/usuario.controllers";

const sessionRouter = Router();

sessionRouter.post("", verifyDataBody(userDataLogSchema), sessionLogUser);

export default sessionRouter;
