import { Partido } from "./partido";
import { Pessoa } from "./pessoa";
import { ProjetoLei } from "./projetolei";

export class Politico {
    id!: number;
    pessoa!: Pessoa;
    cargo!: string;
    partido!:Partido;
    projetolei!: ProjetoLei;
}