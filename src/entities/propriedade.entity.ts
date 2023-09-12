import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Usuario from "./usuario.entity";

@Entity("propriedade")
class Propriedade {
  @PrimaryGeneratedColumn("increment")
  idPropriedade: number;

  @Column({ type: "varchar", length: 45 })
  nomePropriedade: string;

  @Column({ type: "integer", length: 11 })
  cadastroRural: number;
  usuario: any;

  @ManyToOne(() => Usuario, (usuario) => usuario.propriedades)
  usuarios: Usuario;
}

// @ManyToOne(() => Produtor, (produtor) => produtor.propriedade)
// @JoinColumn({ idProdutor: "produtorId" })
// produtor: Produtor;

export default Propriedade;
