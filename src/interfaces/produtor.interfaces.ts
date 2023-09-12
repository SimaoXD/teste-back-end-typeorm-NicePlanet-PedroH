import { z } from "zod";
import {} from "../schemas/usuario.schema";
import { producerDataPublicSchema, producerDataRegisterSchema } from "../schemas/produtor.schema";

interface IProducerPublic extends z.infer<typeof producerDataPublicSchema> {}

interface IProducerRegister extends z.infer<typeof producerDataRegisterSchema> {}

export { IProducerPublic, IProducerRegister };
