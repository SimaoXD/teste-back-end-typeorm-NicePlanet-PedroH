import { Repository } from "typeorm";
import AppDataSource from "../database/data-source";
import { Propriedade } from "../entities";

import { propertyDataPublicSchema, propertyListPublicSchema } from "../schemas/propriedade.schema";
import { IPropertyPublic, IPropertyRegister } from "../interfaces/propriedade.interfaces";

const requestCreateproperty = async (payload: IPropertyRegister): Promise<IPropertyPublic> => {
  const propertyRepository: Repository<Propriedade> = AppDataSource.getRepository(Propriedade);
  const property: Propriedade = propertyRepository.create({ ...payload });
  const save = await propertyRepository.save(property);
  const propertyResponse: IPropertyPublic = propertyDataPublicSchema.parse(property);

  return propertyResponse;
};

const requestReadpropertysList = async (): Promise<IPropertyPublic[]> => {
  const propertyRepo: Repository<Propriedade> = AppDataSource.getRepository(Propriedade);
  const propertysList = await propertyRepo.find();

  return propertyListPublicSchema.parse(propertysList);
};

export { requestCreateproperty, requestReadpropertysList };
