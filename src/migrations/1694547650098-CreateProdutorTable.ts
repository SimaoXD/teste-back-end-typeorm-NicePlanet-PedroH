import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProdutorTable1694487775000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtores",
        columns: [
          {
            name: "idProdutor",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nomeProdutor",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "cpfProdutor",
            type: "Number",
            length: "11",
            isNullable: false,
          },
        ],
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
