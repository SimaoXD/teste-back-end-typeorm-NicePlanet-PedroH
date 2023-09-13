import { Request, Response } from "express";
import { requestCreateProducer, requestReadProducersList } from "../services/produtor.services";
import { IProducerRegister } from "../interfaces/produtor.interfaces";

const createProducer = async (req: Request, res: Response): Promise<Response> => {
  const payload: IProducerRegister = res.locals.data;
  const producer = await requestCreateProducer(payload);

  return res.status(201).json(producer);
};

const getProducerList = async (req: Request, res: Response): Promise<Response> => {
  const listProducer = await requestReadProducersList();

  return res.status(200).json(listProducer);
};

export { createProducer, getProducerList };
