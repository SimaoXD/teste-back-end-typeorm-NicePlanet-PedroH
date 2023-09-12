import { z } from "zod";

const propertyDataPublicSchema = z.object({
  idPropriedade: z.number(),
  nomePropriedade: z.string().max(45),
  cadastroRural: z.string().max(120),
});

const propertyListPublicSchema = propertyDataPublicSchema.extend({}).array();

const propertyDataRegisterSchema = propertyDataPublicSchema.omit({ idPropriedade: true, nomePropriedade: true }).extend({
  cadastroRural: z.string().max(120),
});

export { propertyDataPublicSchema, propertyDataRegisterSchema, propertyListPublicSchema };
