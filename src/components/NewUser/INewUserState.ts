import Usuario from "./../../Models/Usuario";
export interface INewUserState {
    usuario: Usuario;
    error: boolean;
    errorPass:boolean;
    repitePassword:string;
}