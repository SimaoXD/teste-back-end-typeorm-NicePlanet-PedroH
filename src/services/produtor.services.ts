import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { Produtor } from "../entities";
import { IProducerPublic, IProducerRegister } from "../interfaces/produtor.interfaces";
import { producerDataPublicSchema, producerListPublicSchema } from "../schemas/produtor.schema";

const requestCreateProducer = async (payload: IProducerRegister): Promise<IProducerPublic> => {
  const producerRepository: Repository<Produtor> = AppDataSource.getRepository(Produtor);
  const producer: Produtor = producerRepository.create({ ...payload });
  const save = await producerRepository.save(producer);
  const producerResponse: IProducerPublic = producerDataPublicSchema.parse(producer);

  return producerResponse;
};

const requestReadProducersList = async (): Promise<IProducerPublic[]> => {
  const producerRepo: Repository<Produtor> = AppDataSource.getRepository(Produtor);
  const producersList = await producerRepo.find();

  return producerListPublicSchema.parse(producersList);
};

export { requestCreateProducer, requestReadProducersList };
