import Libro from "../../Models/Book";
import Sinpsis from "../../Models/Sinopsis";

export interface IFormBookState {
    book: Libro;
    sinopsis: any;
}