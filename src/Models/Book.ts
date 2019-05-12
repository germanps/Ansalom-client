import Sinopsis from "./Sinopsis";
export default class Libro {
    public id?: string;
    public titulo?: string;
    public autor?: string;
    public genero?: string;
    public coleccion?: string;
    public cover?: string;
    public epub?: string;
    public pdf?: string;
    public sinopsis?: Sinopsis;
}