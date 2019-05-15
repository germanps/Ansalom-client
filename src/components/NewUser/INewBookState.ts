import Book from "./../../Models/Book";
interface Parrafo {
    parrafo: string;
}
export interface INewBookState {
    libro: Book;
    error: boolean;
    sinopsis: any;
}