import * as React from "react";
import { IUserItemProps } from './IUserItemProps'
import "./UserItem.scss";
import Button from "../Button/Button";

export default class UserItem extends React.Component<IUserItemProps, {}> {
    public render(): React.ReactElement<IUserItemProps> {
        return (
            <li className="userListItem">
                <div className="name">
                    <span>{this.props.usuario.nombre} </span> 
                    <span>{this.props.usuario.apellido}</span>
                </div>
                <div className="email">
                    <span>{this.props.usuario.email}</span>
                </div>
                <div className="downloads">
                    <span>{this.props.usuario.descargas}</span>
                </div>
                <div className="rol">
                    <span>{this.props.usuario.rol}</span>
                </div>
                <div className="action">
                    <Button title="Editar" variant="primay"/>
                </div>
            </li>
        );
    }
} 