import { Perfil } from './perfil.model';

export class Comentario {
    constructor(
        public id?: number,
        public id_owner?: number,
        public id_composition?: number,
        public description?: string,
        public user?: Perfil
    ){

    }
    
}