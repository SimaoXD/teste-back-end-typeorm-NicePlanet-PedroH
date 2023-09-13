import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePropriedadeTable1694487991906 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "propriedades",
        columns: [
          {
            name: "idPropriedade",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nomePropriedade",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "cadastroRural",
            type: "varchar",
            length: "45",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
