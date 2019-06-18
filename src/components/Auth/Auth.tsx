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
            usuario: "",
            password: ""
        }
    }

    public componentWillMount(){
        console.log("auth")
    }
    public usuarioAutenticar(){
        debugger;
        console.log("submit");
    }
    
    public render(): React.ReactElement<IAuthProps>{

        
        return(
            <div className="authentication">
                <h2>Login</h2>
                <Mutation
                    mutation={AUTENTICAR_USUARIO}
                    onCompleted={ () => this.props.history.push("/")}
                >
                {(autenticarUsuario, {loading, error, data}) => {
                    return(
                        <form
                            className="form container"
                            onSubmit={this.usuarioAutenticar.bind(this)}
                        >
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Correo</label>
                                    <input type="email"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Password</label>
                                    <input type="password"/>
                                </div>
                            </div>
                            <input type="submit" value="Entrar"/> 
                        </form>
                    );
                }}
                </Mutation>
            </div>
        );
    }
} 