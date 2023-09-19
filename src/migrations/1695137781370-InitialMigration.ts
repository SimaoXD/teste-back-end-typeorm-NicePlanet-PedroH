import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1695137781370 implements MigrationInterface {
    name = 'InitialMigration1695137781370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`propriedades\` (\`idPropriedade\` int NOT NULL AUTO_INCREMENT, \`nomePropriedade\` varchar(45) NOT NULL, \`cadastroRural\` varchar(11) NOT NULL, \`usuariosIdUsuario\` int NULL, PRIMARY KEY (\`idPropriedade\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`idUsuario\` int NOT NULL AUTO_INCREMENT, \`nomeUsuario\` varchar(45) NOT NULL, \`senhaUsuario\` varchar(120) NOT NULL, \`admin\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`idUsuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`produtores\` (\`idProdutor\` int NOT NULL AUTO_INCREMENT, \`nomeProdutor\` varchar(45) NOT NULL, \`cpfProdutor\` varchar(11) NOT NULL, \`usuarioIdUsuario\` int NULL, PRIMARY KEY (\`idProdutor\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`propriedades\` ADD CONSTRAINT \`FK_401e4b94fdbff050a90ea4ecf06\` FOREIGN KEY (\`usuariosIdUsuario\`) REFERENCES \`usuarios\`(\`idUsuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`produtores\` ADD CONSTRAINT \`FK_576cbd0fa98bca796b502cbcc9d\` FOREIGN KEY (\`usuarioIdUsuario\`) REFERENCES \`usuarios\`(\`idUsuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`produtores\` DROP FOREIGN KEY \`FK_576cbd0fa98bca796b502cbcc9d\``);
        await queryRunner.query(`ALTER TABLE \`propriedades\` DROP FOREIGN KEY \`FK_401e4b94fdbff050a90ea4ecf06\``);
        await queryRunner.query(`DROP TABLE \`produtores\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`propriedades\``);
    }

}
