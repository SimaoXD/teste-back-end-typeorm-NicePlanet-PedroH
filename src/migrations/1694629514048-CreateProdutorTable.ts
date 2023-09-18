import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProdutorTable1694629514048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtores",
        columns: [
          {
            name: "idProdutor",
            type: "int",
            isPrimary: true,
            isGenerated: true, // Adicionado
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
            type: "int", // Corrigido de 'Number' para 'int'
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtores");
  }
}
