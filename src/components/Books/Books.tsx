import * as React from "react";
import "./Books.scss";
import {IBooksProps} from "./IBooksProps";
import { Query } from "react-apollo";
import { OBTENER_LIBROS } from "./../../queries";
import BookItem from "../BookItem/BookItem";


export default class Books extends React.Component<IBooksProps, {}> {

    constructor(props: IBooksProps) {
        super(props);
        this.state = {
            book: {}
        }
    }

    public render(): React.ReactElement<IBooksProps> {
        return(
            <>
                <Query query={OBTENER_LIBROS} pollInterval={1000}>
                    {({ loading, error, data, startPolling, stopPolling }) => {
                        if (loading) return "Cargando...";
                        if (error) return `Error ${error.message}`;
                        console.log(data.obtenerLibros);
                        return(
                            <div className="container">
                                <h2 className="title">Listado de libros</h2>
                                <ul className="booksList">
                                    <li className="listHeadings">
                                        <span className="bookTitle">Título</span>
                                        <span className="author">Autor</span>
                                        <span className="collection">Colección</span>
                                        <span className="action"></span>
                                    </li>
                                    {
                                        data.obtenerLibros.map(item => {
                                            /* return <UserItem key={item.id} usuario={item} onUserInfoView={this.showModalUserInfo.bind(this)}/> ; */
                                            return <BookItem key={item.id} book={item}/>
                                        }) 
                                    }
                                </ul>
                            </div>
                        );
                    }}
                </Query>
            </>
        )
    }
}