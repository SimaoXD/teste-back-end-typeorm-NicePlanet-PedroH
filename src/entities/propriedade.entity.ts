import { Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("propriedade")
class Propriedade {
  @PrimaryGeneratedColumn("increment")
  idPropriedade: number;

  @Column({ type: "varchar", length: 45 })
  nomePropriedade: string;

  @Column({ type: "integer", length: 11 })
  cadastroRural: number;
}

export default Propriedade;
