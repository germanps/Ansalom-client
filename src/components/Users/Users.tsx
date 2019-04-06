import * as React from "react";
import { IUsersProps } from './IUsersProps'
import "./Users.scss";
import { Query } from 'react-apollo';
import { USUARIOS_QUERY } from './../../queries';


export default class Users extends React.Component<IUsersProps, {}> {
    public render(): React.ReactElement<IUsersProps> {
        return (
            <Query query={USUARIOS_QUERY}>
                {({ loading, error, data }) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error ${error.message}`
                    console.log(data);
                    return(
                        <h2>Listado usuarios</h2>
                    )
                }}
            </Query>
        );
    }
} 