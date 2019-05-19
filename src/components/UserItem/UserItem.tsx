import * as React from "react";
import { IUserItemProps } from "./IUserItemProps";
import "./UserItem.scss";
import { Link } from "react-router-dom";
import { ELIMINIAR_USUARIO } from "../../mutations";
import { Mutation } from "react-apollo";

export default class UserItem extends React.Component<IUserItemProps, {}> {
    private _handleModalUser(){
        this.props.onUserInfoView(this.props.usuario)
    }
    public render(): React.ReactElement<IUserItemProps> {
        const id = this.props.usuario.id;
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
                    <Mutation mutation={ELIMINIAR_USUARIO}>
                        {eliminarUsuario  => (
                            <button
                                type="button"
                                className="btn secondary"
                                onClick={ () => {
                                    if(window.confirm(`¿Estas seguro que quieres eliminar al cliente? ${this.props.usuario.nombre}`)){
                                        eliminarUsuario({
                                            variables: {id}
                                        })
                                    }
                                }}
                            >Eliminar</button>
                        )}
                    </Mutation>
                    <Link to={`/user/edit/${this.props.usuario.id}`} className="btn">Editar</Link>
                    <button
                        type="button"
                        className="btn normal"
                        onClick={this._handleModalUser.bind(this)}
                    >Ver</button>
                </div>
            </li>
        );
    }
}