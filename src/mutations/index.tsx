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

export const ACTUALIZAR_USUARIO: Usuario = gql`
mutation actualizarUsuario($input : UsuarioInput) {
  actualizarUsuario(input: $input) {
    id
    nombre
    apellido
    email
    descargas
    rol
    comentarios{
      text
      fecha
    }
  }
}
`;


export const ELIMINIAR_USUARIO = gql`
  mutation eliminarUsuario($id:ID!){
    eliminarUsuario(id:$id)
  }
`;

export const NUEVO_LIBRO = gql`
  mutation nuevoLibro($input : LibroInput){
    nuevoLibro(input: $input){
      id
      titulo
      autor
      coleccion
    }
  }
`;