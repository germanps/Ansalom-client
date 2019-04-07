import * as React from "react";
import { IUsersProps } from './IUsersProps'
import "./Users.scss";
import { Query } from 'react-apollo';
import { USUARIOS_QUERY } from './../../queries';
import UserItem from "../UserList/UserItem";
import Usuario from "../../Models/Usuario";


export default class Users extends React.Component<IUsersProps, {}> {
    public render(): React.ReactElement<IUsersProps> {
        return (
            <Query query={USUARIOS_QUERY}>
                {({ loading, error, data }) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error ${error.message}`
                    console.log(data);
                    return(
                        <div className="container">
                            <h2 className="title">Listado usuarios</h2>
                            <ul className="userList">
                                <li className="listHeadings">
                                    <span className="name">Nombre</span>
                                    <span className="email">Email</span>
                                    <span className="downloads">Descargas</span>
                                    <span className="rol">Rol</span>
                                    <span className="action"></span>
                                </li>
                                {
                                    data.getUsuarios.map(item => { 
                                        return <UserItem key={item.id} usuario={item}/>
                                    })
                                }
                            </ul>
                        </div>
                    );
                }}
            </Query>
        );
    }
} 