import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as crypt from "bcryptjs";
import Produtor from "./produtor.entity";
import Propriedade from "./propriedade.entity";

@Entity("usuario")
class Usuario {
  @PrimaryGeneratedColumn("increment")
  idUsuario: number;

  @Column({ type: "varchar", length: 45 })
  nomeUsuario: string;

  @Column({ type: "varchar", length: 120 })
  senhaUsuario: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @OneToMany(() => Produtor, (produtor) => produtor.usuario)
  produtores: Produtor[];

  @OneToMany(() => Propriedade, (propriedade) => propriedade.usuario)
  propriedades: Propriedade[];

  @BeforeInsert()
  @BeforeUpdate()
  verifyPass() {
    const verifyPassHash = crypt.getRounds(this.senhaUsuario);
    if (!verifyPassHash) {
      this.senhaUsuario = crypt.hashSync(this.senhaUsuario, 12);
    }
  }
}

export default Usuario;
