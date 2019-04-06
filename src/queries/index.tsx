import gql from 'graphql-tag';

export const USUARIOS_QUERY = gql`{
	getUsuarios{
        nombre
        apellido
        email
        descargas
    }
}`;