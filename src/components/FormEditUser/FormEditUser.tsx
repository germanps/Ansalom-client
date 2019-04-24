import * as React from "react";
import { IFormEditUserProps } from "./IFormEditUserProps";
import { IFormEditUserState } from "./IFormEditUserState";
import "./FormEditUser.scss";
import { ACTUALIZAR_USUARIO } from "./../../mutations";
import { Mutation } from "react-apollo";


export default class FormEditUser extends React.Component<IFormEditUserProps, IFormEditUserState> {
    constructor(props: IFormEditUserProps) {
        super(props);
        this.state = {
            usuario: this.props.usuario
        };
    }

    public render(): React.ReactElement<IFormEditUserProps> {
        const {nombre, apellido, email, rol} = this.props.usuario;
        return(
            <Mutation mutation={ACTUALIZAR_USUARIO}>
                {actualizarUsuario => (
                    <form className="form container"
                        onSubmit={e => {
                            e.preventDefault();
                            const {id, nombre, apellido, email, rol} = this.state.usuario;
                            const input = {
                                id, nombre, apellido, email, rol
                            };
                            // console.log(input);
                            actualizarUsuario({
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
                                defaultValue={nombre}
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
                                defaultValue={apellido}
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
                                defaultValue={email}
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
                                defaultValue={rol}
                            >
                                <option value="">Elegir...</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="PARTICIPANTE">PARTICIPANTE</option>
                                <option value="MODERADOR">MODERADOR</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <input type="submit" value="Guardar usuario"/>
                    </div>
                </form>
            )}
        </Mutation>
        );
    }
}


