import "reflect-metadata";
import { DataSource } from "typeorm";
import Usuario from "../entities/usuario.entity";
import Produtor from "../entities";
import Propriedade from "../entities/propriedade.entity";
import { CreateUsersTable1694486388447 } from "./migrations/1694486388447-CreateUsersTable";
import { CreateProdutorTable1694487775000 } from "./migrations/1694487775000-CreateProdutorTable";
import { CreatePropriedadeTable1694487991906 } from "./migrations/1694487991906-CreatePropriedadeTable";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345",
  database: "db_niceplanet",
  synchronize: true,
  logging: false,
  entities: [Usuario, Produtor, Propriedade],
  migrations: [CreateUsersTable1694486388447, CreateProdutorTable1694487775000, CreatePropriedadeTable1694487991906],
  subscribers: [],
});

export default AppDataSource;
