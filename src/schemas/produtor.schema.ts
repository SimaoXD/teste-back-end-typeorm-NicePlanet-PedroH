import { z } from "zod";

const producerDataPublicSchema = z.object({
  idProdutor: z.number(),
  nomeProdutor: z.string().max(45),
  cpfProdutor: z.string().max(11),
});

const producerListPublicSchema = producerDataPublicSchema.extend({}).array();

const producerDataRegisterSchema = producerDataPublicSchema.omit({ idProdutor: true, nomeProdutor: true }).extend({
  cpfProdutor: z.string().max(120),
});

export { producerDataPublicSchema, producerDataRegisterSchema, producerListPublicSchema };
