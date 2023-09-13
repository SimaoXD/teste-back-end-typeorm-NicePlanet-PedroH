import "dotenv/config";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { Produtor, Usuario } from "../entities";
import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import AppError from "../errors/AppError";

const verifyUserExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const idUsuario = Number(req.params.idUsuario);
  const userRepo: Repository<Usuario> = AppDataSource.getRepository(Usuario);
  const user = await userRepo.findOneBy({ idUsuario });

  if (!user) throw new AppError("User not found", 404);

  res.locals.user = user;

  return next();
};
const verifyProducerExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const idProdutor = Number(req.params.idProdutor);
  const userRepo: Repository<Produtor> = AppDataSource.getRepository(Produtor);
  const user = await userRepo.findOneBy({ idProdutor });

  if (!user) throw new AppError("Produtor not found", 404);

  res.locals.user = user;

  return next();
};

const verifyDataBody = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
  const payload = schema.parse(req.body);
  res.locals.data = payload;

  return next();
};
export { verifyDataBody, verifyUserExists, verifyProducerExists };
