import * as React from "react";
import {IAuthProps} from "./IAuthProps";
import "./Auth.scss";


export default class Auth extends React.Component<IAuthProps, {}>{

    public componentWillMount(){
        console.log("auth")
    }
    
    public render(): React.ReactElement<IAuthProps>{

        
        return(
            <div>
                git git
            </div>
        );
    }
} 