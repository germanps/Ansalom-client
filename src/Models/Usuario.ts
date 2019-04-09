import Favorito from "./Favorito";
import Comentario from "./Comentario";
export default class Usuario {
    public id: number;
    public nombre?: string;
    public apellido?: string;
    public email?: string;
    public descargas?: number;
    public favoritos?: Favorito;
    public rol?: string;
    public comentarios?: Comentario;
}