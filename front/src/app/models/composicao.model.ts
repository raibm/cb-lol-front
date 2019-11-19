import { Comentario } from './comentario.model';

export class Composicao {
    constructor(
        public titulo?: string,
        public autor?: string,
        public iconeAutor?: number,
        public imgCapa?: string,
        public comentarios: Comentario[] = []
    ){

    }
}