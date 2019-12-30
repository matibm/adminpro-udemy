import { Usuario } from 'src/app/models/usuario.model';
export class Post{
    constructor(
        public titulo: string,
        public contenido: string,
        public usuario: Usuario,
        public auto?: string
    ){

    }
}