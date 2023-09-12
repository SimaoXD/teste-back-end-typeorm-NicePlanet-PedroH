import { z } from "zod";
import { userDataLogSchema, userDataPrivateSchema, userDataPublicSchema, userDataRegisterSchema } from "../schemas/usuario.schema";

interface IUserPublic extends z.infer<typeof userDataPublicSchema> {}
interface IUserPrivate extends z.infer<typeof userDataPrivateSchema> {}
interface IUserRegister extends z.infer<typeof userDataRegisterSchema> {}
interface IUserLog extends z.infer<typeof userDataLogSchema> {}

export { IUserPublic, IUserRegister, IUserLog, IUserPrivate };
