import Usuario from "../../Models/Usuario";

export interface IFormEditUserProps {
    usuario: Usuario;
    history?: any;
    refetch?: any;
}