import * as React from "react";
import { IHeaderProps } from './IHeaderProps';
import "./Header.scss";
import Button from "../Button/Button";
const reactLogo = require("./../../assets/img/logoAnsalom.png");

export default class Header extends React.Component<IHeaderProps, {}> {
    public render(): React.ReactElement<IHeaderProps> {
        return (
            <header className="header">
                <div className="logoWrapper">
                    <div className="logo">
                        <img src={reactLogo}/>
                    </div>
                    <h1>{this.props.title}</h1>
                </div>
                <nav>
                    <ul>
                        <li>Recomendados</li>
                        <li>Autores</li>
                        <li>Series</li>
                    </ul>
                    <Button title="Nuevo usuario" variant="primary"/>
                </nav>
                
            </header>
        );
    }
} 