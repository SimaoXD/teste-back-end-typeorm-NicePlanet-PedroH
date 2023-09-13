import "dotenv/config";
import * as crypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { IUserLog } from "../interfaces/usuario.interfaces";
import { Usuario } from "../entities";
import AppDataSource from "../data-source";
import AppError from "../errors/AppError";

const logUser = async (payload: IUserLog): Promise<String> => {
  const { nomeUsuario, senhaUsuario } = payload;
  const userRepo: Repository<Usuario> = AppDataSource.getRepository(Usuario);
  const user = await userRepo.findOneBy({ nomeUsuario });

  if (!user) throw new AppError("Invalid credentials", 401);

  const verifyPass = crypt.compareSync(senhaUsuario, user.senhaUsuario);

  if (!verifyPass) throw new AppError("Invalid credentials", 401);

  const key = process.env.SECRET_KEY!;
  const token = jwt.sign({ admin: user.admin }, key, {
    subject: String(user.idUsuario),
  });

  return token;
};

export { logUser };
