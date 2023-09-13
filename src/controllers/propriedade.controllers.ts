import { Request, Response } from "express";
import { requestCreateproperty, requestReadpropertysList } from "../services/propriedade.services";
import { IPropertyRegister } from "../interfaces/propriedade.interfaces";

const createProperty = async (req: Request, res: Response): Promise<Response> => {
  const payload: IPropertyRegister = res.locals.data;
  const property = await requestCreateproperty(payload);

  return res.status(201).json(property);
};

const getPropertyList = async (req: Request, res: Response): Promise<Response> => {
  const listproperty = await requestReadpropertysList();

  return res.status(200).json(listproperty);
};

export { createProperty, getPropertyList };
