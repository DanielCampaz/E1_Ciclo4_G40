import { imagen } from "./imagen";

export class inmueble {
    public _id: string | undefined;
    public descripcion: string | undefined;
    public tipo: string | undefined;
    public n_habitaciones: string | undefined;
    public n_banos: string | undefined;
    public precio: number | undefined;
    public t_pub: number | undefined;
    public id_zona: string | undefined;
    public imagens: Array<imagen> = [];

    constructor(){

    }
}