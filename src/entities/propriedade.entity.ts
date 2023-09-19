import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Usuario from "./usuario.entity";

@Entity("propriedades")
class Propriedade {
  @PrimaryGeneratedColumn("increment")
  idPropriedade: number;

  @Column({ type: "varchar", length: 45 })
  nomePropriedade: string;

  @Column({ type: "varchar", length: 11 })
  cadastroRural: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.propriedades)
  usuario: Usuario;
}

// @ManyToOne(() => Produtor, (produtor) => produtor.propriedade)
// @JoinColumn({ idProdutor: "produtorId" })
// produtor: Produtor;

export default Propriedade;
