import * as React from "react";
import { IHeaderProps } from "./IHeaderProps";
import "./Header.scss";
import Button from "../Button/Button";
const reactLogo = require("./../../assets/img/logoAnsalom.png");
import { Link } from "react-router-dom";

export default class Header extends React.Component<IHeaderProps, {}> {
    public render(): React.ReactElement<IHeaderProps> {
        return (
            <header className="header">
                <div className="logoWrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src={reactLogo}/>
                        </Link>
                    </div>
                    <h1 className="main-title">{this.props.title}</h1>
                </div>
                <nav>
                    <ul>
                        <li>Recomendados</li>
                        <li>Autores</li>
                        <li>Series</li>
                    </ul>
                    <Link to="/user/new" className="btn">Nuevo usuario</Link>
                </nav>
            </header>
        );
    }
} 