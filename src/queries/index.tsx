import gql from "graphql-tag";
import Usuario from "./../Models/Usuario";

export const USUARIOS_QUERY: Usuario = gql`{
	getUsuarios{
        id
        nombre
        apellido
        email
        descargas
        favoritos{
            libro
            autor
        }
        rol
        comentarios{
            fecha
            text
        }
    }
}`;

export const USUARIO_QUERY = gql`
    query consultarUsuario($id:ID){
        getUsuario(id: $id){
          nombre
          apellido
          email
        }
      }
`;