import { z } from "zod";

const userDataPublicSchema = z.object({
  idUsuario: z.number(),
  nomeUsuario: z.string().max(45),
  senhaUsuario: z.string().max(120),
  admin: z.boolean().default(false),
});

const userListPublicSchema = userDataPublicSchema.extend({}).array();

const userDataRegisterSchema = userDataPublicSchema.omit({ idUsuario: true }).extend({
  senhaUsuario: z.string().max(120),
});

const userDataPrivateSchema = userDataRegisterSchema
  .omit({
    admin: true,
  })
  .partial();

const userDataLogSchema = z.object({
  nomeUsuario: z.string().max(45),
  senhaUsuario: z.string().max(120),
});

export { userDataPublicSchema, userDataRegisterSchema, userDataLogSchema, userListPublicSchema, userDataPrivateSchema };
