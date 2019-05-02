import Usuario from "../../Models/Usuario";

export interface IUserState {
    showModal: boolean;
    user: Usuario;
    paginador: {
        offset: number,
        actual: number
    };
}