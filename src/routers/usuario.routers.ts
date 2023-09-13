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

// Rotas para Produtores (você pode precisar de middlewares adicionais ou esquemas aqui)
router.post("/produtor", createProducer);
router.get("/produtor/:id", verifyProducerExists, getProducerList);

// Rotas para Propriedades (você pode precisar de middlewares adicionais ou esquemas aqui)
router.post("/propriedade", createProperty);
router.get("/propriedade", getPropertyList);

export default router;
