import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Consulta } from "../consulta/consulta";
import { TipoUsuario } from "../enums/tipo-usuario";

export class Usuario extends AbstractEntity{
    nome!: string;
    cpf!: string;
    tipoUsuario!: TipoUsuario;
    username!: string;
    senha!: string;
    consultas!: Consulta[];
}
