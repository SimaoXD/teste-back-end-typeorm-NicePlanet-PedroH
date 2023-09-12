import { Request, Response } from "express";
import { IUserLog, IUserRegister } from "../interfaces/usuario.interfaces";
import { requestCreateUser, requestReadUsersList } from "../services/usuario.services";
import { logUser } from "../services/log.services";

const sessionLogUser = async (req: Request, res: Response): Promise<Response> => {
  const payload: IUserLog = res.locals.data;
  const token = await logUser(payload);

  return res.status(200).json({ token });
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const payload: IUserRegister = res.locals.data;
  const user = await requestCreateUser(payload);

  return res.status(201).json(user);
};

const getUserList = async (req: Request, res: Response): Promise<Response> => {
  const userList = await requestReadUsersList();

  return res.status(200).json(userList);
};

export { sessionLogUser, createUser, getUserList };
