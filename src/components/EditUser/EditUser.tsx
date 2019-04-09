import * as React from "react";
import { IEditUserProps } from "./IEditUserProps";
import "./EditUser.scss";


export default class EditUser extends React.Component<IEditUserProps, {}> {
    public render(): React.ReactElement<IEditUserProps> {
        return(
            <div className="main">
                Edituser
            </div>
        );
    }
}