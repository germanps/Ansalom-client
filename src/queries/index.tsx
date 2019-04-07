import gql from 'graphql-tag';

export const USUARIOS_QUERY = gql`{
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