import { Router } from "express";
import { verifyDataBody, verifyProducerExists } from "../middlewares/verify.middlewares";
import { userDataRegisterSchema } from "../schemas/usuario.schema";
import { createUser, getUserList } from "../controllers/usuario.controllers";
import { verifyTokenUser, verifyUserAdmin } from "../middlewares/validation.middlewares";
import { createProperty, getPropertyList } from "../controllers/propriedade.controllers";
import { createProducer, getProducerList } from "../controllers/produtor.controllers";

const router = Router();

router.post("/usuario", verifyDataBody(userDataRegisterSchema), createUser);
router.get("/usuario", verifyTokenUser, verifyUserAdmin, getUserList);

router.post("/produtor", createProducer);
router.get("/produtor/:id", verifyProducerExists, getProducerList);

router.post("/propriedade", createProperty);
router.get("/propriedade", getPropertyList);

export default router;
