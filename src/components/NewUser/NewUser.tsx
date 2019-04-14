import * as React from "react";
import { INewUserProps } from "./INewUserProps";
import "./NewUser.scss";
import { INewUserState } from "./INewUserState";
import Usuario from "./../../Models/Usuario";
import { NUEVO_USUARIO } from "./../../mutations";
import { Mutation } from "react-apollo";


export default class NewUser extends React.Component<INewUserProps, INewUserState> {
    constructor(props: INewUserProps){
        super(props);
        this.state = {
            usuario: {
                nombre: "",
                apellido: "",
                email: "",
                rol: "",
            }
        };
    }
    public render(): React.ReactElement<INewUserProps> {
        return(
            <div className="newUser">
                <Mutation mutation={NUEVO_USUARIO}>
                    {crearUsuario => (
                        <form className="form container"
                            onSubmit={e => {
                                e.preventDefault();
                                const {nombre, apellido, email, favoritos, descargas, rol, comentarios} = this.state.usuario;
                                const input = {
                                    nombre,
                                    apellido,
                                    email,
                                    rol
                                };
                                crearUsuario({
                                    variables: {input}
                                });
                        }}
                        >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    onChange={e => {
                                        this.setState({
                                            usuario: {
                                                ...this.state.usuario,
                                                nombre: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Apellido</label>
                                <input 
                                    id="surname"
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellido"
                                    onChange={e => {
                                        this.setState({
                                            usuario: {
                                                ...this.state.usuario,
                                                apellido: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={e => {
                                        this.setState({
                                            usuario: {
                                                ...this.state.usuario,
                                                email: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Tipo Usuario</label>
                                <select
                                    className="form-control"
                                    onChange={e => {
                                        this.setState({
                                            usuario: {
                                                ...this.state.usuario,
                                                rol: e.target.value
                                            }
                                        });
                                    }}
                                >
                                    <option value="">Elegir...</option>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="PARTICIPANTE">PARTICIPANTE</option>
                                    <option value="MODERADOR">MODERADOR</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                        </div>
                    </form>
                    )}
                </Mutation>
            </div>
        );
    }
}