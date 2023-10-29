import { Animal } from "../animal/animal";
import { Tutor } from "../tutor/tutor";

export class Consulta {
    data!: Date;
    status!: string;
    consulta!: Consulta;
    animal!: Animal;
    tutor!: Tutor;
}
