import * as React from "react";
import { IMainProps } from './IMainProps';
import './Main.scss';
import Header from "../Header/Header"; 
import Users from "../Users/Users";

export default class Main extends React.Component<IMainProps, {}>{
    public render(): React.ReactElement<IMainProps>{
        return(
            <div className="main"> 
                <Header title="Ansalom Books"/>
                <Users />
            </div>
        )
    }
}