import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsuarioTable1694629577502 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuarios",
        columns: [
          {
            name: "idUsuario",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nomeUsuario",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "senhaUsuario",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
