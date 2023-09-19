import { Router } from "express";
import { verifyDataBody, verifyProducerExists } from "../middlewares/verify.middlewares";
import { userDataRegisterSchema } from "../schemas/usuario.schema";
import { createUser, getUserList } from "../controllers/usuario.controllers";
import { verifyTokenUser, verifyUserAdmin } from "../middlewares/validation.middlewares";
import { createProperty, getPropertyList } from "../controllers/propriedade.controllers";
import { createProducer, getProducerList } from "../controllers/produtor.controllers";
import { producerDataRegisterSchema } from "../schemas/produtor.schema";
import { propertyDataRegisterSchema } from "../schemas/propriedade.schema";

const router = Router();

router.post("", verifyDataBody(userDataRegisterSchema), createUser);
router.get("", verifyTokenUser, verifyUserAdmin, getUserList);

router.post("/produtores", verifyDataBody(producerDataRegisterSchema), createProducer);
router.get("/produtor/:id", verifyProducerExists, getProducerList);

router.post("/propriedade", verifyDataBody(propertyDataRegisterSchema), createProperty);
router.get("/propriedade/:id", getPropertyList);

export default router;
