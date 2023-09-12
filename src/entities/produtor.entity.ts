import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Propriedade from "./propriedade.entity";
import Usuario from "./usuario.entity";

@Entity("produtor")
class Produtor {
  @PrimaryGeneratedColumn("increment")
  idProdutor: number;

  @Column({ type: "varchar", length: 45 })
  nomeProdutor: string;

  @Column({ type: "varchar", length: 11 })
  cpfProdutor: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.produtores)
  usuario: Usuario;

  // @OneToMany(() => Propriedade, (propriedade) => propriedade.produtor)
  // propriedade: Propriedade[];
}

export default Produtor;
