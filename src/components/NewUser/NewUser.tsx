import * as React from "react";
import { INewUserProps } from "./INewUserProps";
import "./NewUser.scss";
import { INewUserState } from "./INewUserState";
import { NUEVO_USUARIO } from "./../../mutations";
import { Mutation } from "react-apollo";


export default class NewUser extends React.Component<INewUserProps, INewUserState> {
    constructor(props: INewUserProps) {
        super(props);
        this.state = {
            usuario: {
                nombre: "",
                apellido: "",
                password: "",
                email: "",
                descargas: 0,
                rol: "",
            },
            error: false
        };
    }
    public render(): React.ReactElement<INewUserProps> {
        const {error} = this.state;
        let respuesta = (error) ? <p className="form-error container">Todos los campos son abligatorios</p> : "";
        return(
            <div className="newUser">
                <h2 className="title container">Nuevo usuario</h2>
                {respuesta}
                <Mutation
                    mutation={NUEVO_USUARIO}
                    onCompleted={ () => this.props.history.push("/") }
                >
                    {crearUsuario => (
                        <form className="form container"
                            onSubmit={e => {
                                e.preventDefault();
                                const {nombre, apellido, password, email, favoritos, descargas, rol, comentarios} = this.state.usuario;
                                // Control de campos vacios
                                if (nombre === "" || apellido === "" || email === "" || rol === "" || password === "") {
                                    this.setState({error: true});
                                    return;
                                }
                                this.setState({error: false});
                                const input = {
                                    nombre,
                                    apellido,
                                    password,
                                    email,
                                    descargas,
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
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={e => {
                                        this.setState({
                                            usuario: {
                                                ...this.state.usuario,
                                                password: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>   
                            <input type="submit" value="Guardar usuario"/>     
                        </div>
                        <div className="form-row sm-row">
                            <div className="form-group">
                                <label htmlFor="name">Descargas</label>
                                <input
                                    id="descargas"
                                    type="number"
                                    className="form-control"
                                    placeholder="Descargas"
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
                    </form>
                    )}
                </Mutation>
            </div>
        );
    }
}