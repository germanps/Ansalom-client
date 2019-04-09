import * as React from "react";
import { INewUserProps } from "./INewUserProps";
import "./NewUser.scss";


export default class NewUser extends React.Component<INewUserProps, {}> {
    public render(): React.ReactElement<INewUserProps> {
        return(
            <div className="main">
                newuser
            </div>
        );
    }
}