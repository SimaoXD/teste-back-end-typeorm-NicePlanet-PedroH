import { Request, Response } from "express";
import Usuario from "../entities/index";

const sessionLogUser = async (req: Request, res: Response): Promise<Response> => {
  const payload: IUsuarioLog = res.locals.data;
  const token = await logUsuario(payload);

  return res.status(200).json({ token });
};

const createUsuario = async (req: Request, res: Response): Promise<Response> => {
  const payload: IUsuarioRegister = res.locals.data;
  const usuario = await requestCreateUsuario(payload);

  return res.status(201).json(usuario);
};

const getUsuarioList = async (req: Request, res: Response): Promise<Response> => {
  const usuarioList = await requestReadUsuarioList();

  return res.status(200).json(usuarioList);
};

export { sessionLogUser, createUsuario, getUsuarioList };
