import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Propriedade from "./propriedade.entity";

@Entity("produtor")
class Produtor {
  @PrimaryGeneratedColumn("increment")
  idProdutor: number;

  @Column({ type: "varchar", length: 45 })
  nomeProdutor: string;

  @Column({ type: "integer", length: 11 })
  cpfProdutor: number;

  @OneToMany(() => Propriedade, (propriedade) => propriedade.produtor)
  @JoinColumn()
  propriedade: Propriedade[];
}
export default Produtor;
