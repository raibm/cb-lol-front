import { Comentario } from './comentario.model';
import { Data } from '@angular/router';

export class Composicao {
    constructor(
        public id?: number,
        public id_owner?: number,
        public title?: string,
        public createdAt?: Data,
        public updatedAt?: Data,
        public top_champion?: number,
        public mid_champion?: number,
        public jg_champion?: number,
        public adc_champion?: number,
        public sup_champion?: number,
        public description?: string,
        public comentarios: Comentario[] = []
    ){

    }
}