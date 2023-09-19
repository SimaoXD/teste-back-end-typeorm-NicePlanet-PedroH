import { Repository } from "typeorm";
import { IUserPublic, IUserRegister } from "../interfaces/usuario.interfaces";
import { userDataPublicSchema, userListPublicSchema } from "../schemas/usuario.schema";
import AppDataSource from "../ormconfig";
import Usuario from "../entities/usuario.entity";

const requestCreateUser = async (payload: IUserRegister): Promise<IUserPublic> => {
  const userRepository: Repository<Usuario> = AppDataSource.getRepository(Usuario);
  const user: Usuario = userRepository.create({ ...payload });
  const save = await userRepository.save(user);
  const userResponse: IUserPublic = userDataPublicSchema.parse(user);

  return userResponse;
};

const requestReadUsersList = async (): Promise<IUserPublic[]> => {
  const userRepo: Repository<Usuario> = AppDataSource.getRepository(Usuario);
  const usersList = await userRepo.find();

  return userListPublicSchema.parse(usersList);
};

export { requestCreateUser, requestReadUsersList };
