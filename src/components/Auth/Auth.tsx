import * as React from "react";
import {IAuthProps} from "./IAuthProps";
import {IAuthState} from "./IAuthState";
import {AUTENTICAR_USUARIO} from "./../../mutations";
import "./Auth.scss";
import { Mutation } from "react-apollo";


export default class Auth extends React.Component<IAuthProps, IAuthState>{

    constructor(props: IAuthProps){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }


 
    public iniciarSesion = (e, usuarioAutenticar) => {
        usuarioAutenticar().then(async ({data}) => {
            //almacenar el token en el local storage
            localStorage.setItem('token', data.autenticarUsuario.token);
            //ejecutar query una vez se inicie sesion

            //limpiar State
            
            //redireccionar
        });
    }


    private validarForm = () => {
        const {email, password} = this.state;
        const noValido = !email || !password;
        return noValido;
    }

    
    public render(): React.ReactElement<IAuthProps>{

        const {email, password} = this.state;
        return(
           
            <div className="authentication">
                <h2>Login</h2>
                <Mutation
                    mutation={AUTENTICAR_USUARIO}
                    variables={{email, password}}
                    //onCompleted={ () => this.props.history.push("/")}
                >
                {(usuarioAutenticar, {loading, error, data}) => {
                   
                    return(
                        <form
                            className="form container"
                            onSubmit={e => this.iniciarSesion(e, usuarioAutenticar)}
                        >
                             {error && <p>error!</p>}
                             
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={ e => {
                                            this.setState({
                                                email: e.target.value
                                            });
                                        }}
                                        value={email}
                                    />
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
                                        onChange={ e => {
                                            this.setState({
                                                password: e.target.value
                                            });
                                        }}
                                        value={password}
                                    />
                                </div>
                            </div>
                            <input 
                                type="submit" 
                                value="Entrar"
                                disabled={
                                    loading || this.validarForm()
                                }
                            /> 
                        </form>
                    );
                }}
                </Mutation>
            </div>
        );
    }
} 