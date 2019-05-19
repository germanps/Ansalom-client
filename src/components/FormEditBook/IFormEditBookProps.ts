import Libro from "../../Models/Book";

export interface IFormEditBookProps {
    book: Libro;
    history?: any;
    refetch?: any;
}