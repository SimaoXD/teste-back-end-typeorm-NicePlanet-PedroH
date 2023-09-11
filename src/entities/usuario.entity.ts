import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import * as crypt from "bcryptjs";
import Produtor from "./produtor.entity";

@Entity("usuario")
class Usuario {
  @PrimaryGeneratedColumn("increment")
  idUsuario: number;

  @Column({ type: "varchar", length: 45 })
  nomeUsuario: string;

  @Column({ type: "varchar", length: 120 })
  senhaUsuario: string;

  @OneToMany(() => Produtor, (produtor) => produtor.usuario)
  @JoinColumn()
  produtor: Produtor;

  @BeforeInsert
  @BeforeUpdate
  verifyPass(){
    const verifyPassHash = crypt.getRounds(this.senhaUsuario);
    if (!verifyPassHash){
        this.senhaUsuario = crypt.hashSync(this.senhaUsuario, 12);
    }
}
@BeforeUpdate()
}

export default Usuario
