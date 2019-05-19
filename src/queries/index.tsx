import gql from "graphql-tag";
import Usuario from "./../Models/Usuario";

export const USUARIOS_QUERY: Usuario = gql`
	query getUsuarios($limite: Int, $offset: Int){
        getUsuarios(limite: $limite, offset: $offset){
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
        totalUsuarios
    }
`;

export const USUARIO_QUERY = gql`
    query consultarUsuario($id:ID){
        getUsuario(id: $id){
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
      }
`;

//Libros
export const OBTENER_LIBROS = gql`
    query {
        obtenerLibros{
            id
            titulo
            autor
            genero
            cover
            coleccion
            epub
            pdf
            sinopsis {
                parrafo
            }
        }
    }
`;

export const OBTENER_LIBRO = gql`
    query obtenerLibro($id : ID!){
        obtenerLibro(id: $id){
            id
            titulo
            autor
            genero
            cover
            coleccion
            epub
            pdf
            sinopsis {
                parrafo
            }
        }
    }
`;