import gql from "graphql-tag";
import Usuario from "./../Models/Usuario";

export const NUEVO_USUARIO: Usuario = gql`
mutation crearUsuario($input: UsuarioInput) {
    crearUsuario(input: $input){
      id
      nombre
      apellido
    }
  }
`;