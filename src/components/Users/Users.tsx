import * as React from "react";
import { IUsersProps } from './IUsersProps'
import "./Users.scss";


export default class Users extends React.Component<IUsersProps, {}> {
    public render(): React.ReactElement<IUsersProps> {
        return (
            <div>
                usuarios
            </div>
        );
    }
} 