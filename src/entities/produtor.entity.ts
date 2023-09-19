import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Usuario from "./usuario.entity";

@Entity("produtores")
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
