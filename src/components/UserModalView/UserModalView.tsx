import * as React from "react";
import { IUserModalViewProps } from "./IUserModalViewProps";
import "./UserModalView.scss";
export default class UserModalView extends React.Component<IUserModalViewProps, {}>{

    public render(): React.ReactElement<IUserModalViewProps>{
        return(
            <div id="ModalUserInfo" className="modalUserInfo">  
                <div className="modalWrapper">
                    <div className="modalHeader">
                        <h2>Usuario</h2>
                        <i className="fas fa-times " onClick={this.props._handleModalAppear}></i>
                    </div>
                    <h3>{this.props.user.nombre} {this.props.user.apellido}</h3>
                      
                    <div className="modalContent">
                        <ul className="userList">
                            <li className="listItem">
                                <span className="title">ID: </span>
                                <span className="data">{this.props.user.id}</span>
                            </li>
                            <li className="listItem">
                                <span className="title">Email: </span>
                                <span className="data">{this.props.user.email}</span>
                            </li>

                            <li className="listItem">
                                <span className="title">Rol: </span>
                                <span className="data">{this.props.user.rol}</span>
                            </li>

                            <li className="listItem">
                                <span className="title">Descargas: </span>
                                <span className="data">{this.props.user.descargas}</span>
                            </li>
                        </ul>
                        <ul className="detailsList">
                            <li className="listItem">
                                <span className="title">Favoritos: </span>
                                <ul className="socialList">
                                {
                                    Object.keys(this.props.user.favoritos).map((obj, key) => {
                                        return(
                                            <li className="socialListItem" key={key}>
                                                <div className="listWrapper">
                                                    <p>Libro: <span>{this.props.user.favoritos[obj].libro}</span></p>
                                                    <p>Autor: <span>{this.props.user.favoritos[obj].autor}</span></p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                            
                            <li className="listItem">
                                <span className="title">Comentarios: </span>
                                <ul className="socialList">
                                {
                                    Object.keys(this.props.user.comentarios).map((obj, key) => {
                                        return(
                                            <li className="socialListItem" key={key}>
                                                <div className="listWrapper">
                                                    <p>Texto: <span>{this.props.user.comentarios[obj].text}</span></p>
                                                    <p>Fecha: <span>{this.props.user.comentarios[obj].fecha}</span></p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}