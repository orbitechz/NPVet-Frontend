import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Anamnese } from "../anamnese/anamnese";
import { Consulta } from "../consulta/consulta";
import { Sexo } from "../enums/sexo";
import { Tutor } from "../tutor/tutor";

export class Animal extends AbstractEntity{
    nome!: string;
    especie!: string;
    raca!: string;
    sexo!: Sexo;
    idade!: number;
    peso!: number;
    pelagem!: string;
    procedencia!: string;
    tutorId!: Tutor;
    anamneses!: Anamnese[];
    consulta!: Consulta[];
    /*vacinas!: Vacina[];*/
}
