import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";

const settings = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: "mysql",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

const AppDataSource = new DataSource(settings());

export default AppDataSource;

// import "reflect-metadata";
// import { DataSource } from "typeorm";
// import Usuario from "./entities/usuario.entity";
// import Propriedade from "./entities/propriedade.entity";
// import { CreateUsersTable1694486388447 } from "./database/migrations/1694486388447-CreateUsersTable";
// import { CreateProdutorTable1694487775000 } from "./database/migrations/1694487775000-CreateProdutorTable";
// import { CreatePropriedadeTable1694487991906 } from "./database/migrations/1694487991906-CreatePropriedadeTable";
// import { Produtor } from "./entities";

// const AppDataSource = new DataSource({
//   type: "mysql",
// host: "localhost",
// port: 3306,
// username: "root",
// password: "12345",
// database: "db_niceplanet",
//   synchronize: true,
//   logging: true,
//   entities: [Usuario, Produtor, Propriedade],
//   migrations: [CreateUsersTable1694486388447, CreateProdutorTable1694487775000, CreatePropriedadeTable1694487991906],
//   subscribers: [],
// });

// export default AppDataSource;
