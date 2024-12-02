export class Deportista {
    dep_cedula: number;
    nombre: string;
    email: string;
    telefono:string;
    categoria:string;
    Elo: number;
    idclub: number;
    estado:string;
}

export interface DeportistaResponse{
    value: Deportista[];
}
