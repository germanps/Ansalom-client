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
        const {nombre, apellido, email, rol, descargas} = this.props.usuario;
        return(
            <Mutation
                mutation={ACTUALIZAR_USUARIO}
                onCompleted={ () => this.props.refetch().then(() => {
                    this.props.history.push("/");
                })}
            >
                {actualizarUsuario => (
                    <form className="form container"
                        onSubmit={e => {
                            e.preventDefault();
                            const {id, nombre, apellido, email, rol, descargas} = this.state.usuario;
                            console.log(typeof descargas);
                            const input = {
                                id, nombre, apellido, email, rol, descargas
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

                    <div className="form-row sm-row">
                            <div className="form-group">
                                <label htmlFor="name">Descargas</label>
                                <input
                                    id="descargas"
                                    type="number"
                                    className="form-control"
                                    defaultValue={String(descargas)}
                                    onChange={e => {
                                        this.setState({
                                            usuario: {
                                                ...this.state.usuario,
                                                descargas: e.target.valueAsNumber
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <button
                                    type="button"
                                    onClick={e => {
                                        e.preventDefault();
                                        console.log("mostrar comentarios");
                                    }}
                                >Ver comentarios</button>
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
