import gql from "graphql-tag";
import Usuario from "./../Models/Usuario";
import Libro from "./../Models/Book";

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

export const NUEVO_LIBRO: Libro = gql`
  mutation nuevoLibro($input : LibroInput){
    nuevoLibro(input: $input){
      id
      titulo
      autor
      coleccion
    }
  }
`;


export const ELIMINAR_LIBRO = gql`
  mutation eliminarLibro($id : ID!){
    eliminarLibro(id: $id)
  }
`;

export const ACTUALIZAR_LIBRO: Libro = gql`
  mutation actualizarLibro($input: LibroInput){
  actualizarLibro(input: $input){
    id
    titulo
    autor
    genero
    coleccion
    cover
    epub
    pdf
    sinopsis{
      parrafo
    }
  }   
}
`;

export const AUTENTICAR_USUARIO = gql`
  mutation autenticarUsuario($email: String $password: String){
    autenticarUsuario(email: $email, password: $password){
      token
    }
  }
`;
