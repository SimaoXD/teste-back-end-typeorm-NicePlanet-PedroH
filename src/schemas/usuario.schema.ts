import { z } from "zod";

const userDataPublicSchema = z.object({
  idUsuario: z.number(),
  nomeUsuario: z.string().max(45),
  senhaUsuario: z.string().max(120),
});

const userListPublicSchema = userDataPublicSchema.extend({}).array();

const userDataRegisterSchema = userDataPublicSchema.omit({ idUsuario: true, nomeUsuario: true }).extend({
  senhaUsuario: z.string().max(120),
});

const userDataLogSchema = z.object({
  nomeUsuario: z.string().max(45),
  senhaUsuario: z.string().max(120),
});

export { userDataPublicSchema, userDataRegisterSchema, userDataLogSchema, userListPublicSchema };
