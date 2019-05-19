import * as React from "react";
import { IBookItemProps } from "./IBookItemProps";
import "./BookItem.scss";

import { Link } from "react-router-dom";
import { ELIMINAR_LIBRO } from "../../mutations";
import { Mutation } from "react-apollo";

export default class BookItem extends React.Component<IBookItemProps, {}> {

    public render(): React.ReactElement<IBookItemProps> {
        const id = this.props.book.id;
        return(
            <li className="bookListItem">
                <div className="bookTitle">
                    <span>{this.props.book.titulo} </span> 
                </div>
                <div className="author">
                    <span>{this.props.book.autor}</span>
                </div>
                <div className="colection">
                    <span>{this.props.book.coleccion}</span>
                </div>
                <div className="action">
                    <Mutation mutation={ELIMINAR_LIBRO}>
                        {eliminarLibro => (
                            <button
                                type="button"
                                className="btn secondary"
                                onClick={ () => {
                                    if(window.confirm(`Estas seguro que quieres eliminar el libro? ${this.props.book.titulo}`)){
                                        eliminarLibro({
                                            variables: {id}
                                        })
                                    }
                                }}
                            >Eliminar</button>
                        )}
                    </Mutation>
                    <Link to={`/book/edit/${this.props.book.id}`} className="btn">Editar</Link>
                </div>
            </li>
        )
    }
}