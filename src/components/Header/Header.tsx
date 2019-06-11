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
                <nav className="navigation">
                    <ul className="menu-list">
                        <li className="menu-list_item">
                            <Link to="/user/new" className="btn">Nuevo usuario</Link>
                        </li>
                        <li className="menu-list_item">
                            <Link to="/books" className="btn">Libros</Link>
                        </li> 
                        <li className="menu-list_item">
                            <Link to="/book/new" className="btn">Nuevo libro</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
} 