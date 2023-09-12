import { z } from "zod";
import {} from "../schemas/usuario.schema";
import { propertyDataPublicSchema, propertyDataRegisterSchema } from "../schemas/propriedade.schema";

interface IPropertyPublic extends z.infer<typeof propertyDataPublicSchema> {}

interface IPropertyRegister extends z.infer<typeof propertyDataRegisterSchema> {}

export { IPropertyPublic, IPropertyRegister };
