export class Torneo {
    idtorneo: number;
    nombre: string;
    modalidad: string;
    fecha: Date;
    estado: string;
}

export interface TorneoResponse{
    value: Torneo[];
}
