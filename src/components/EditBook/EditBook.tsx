import * as React from "react";
import "./EditBook.tsx";
import "./EditBook.scss";
import {IEditBookProps} from "./IEditBookProps";
import {OBTENER_LIBRO} from "../../queries";
import { Query } from "react-apollo";
import FormEditBook from "../FormEditBook/FormEditBook";


export default class EditBook extends React.Component<IEditBookProps, {}> {
    public render(): React.ReactElement<IEditBookProps> {
        const { id } = this.props.match.params;
        console.log(id)
        return(
            <div className="editUser">
                <h2 className="title container">Editar libro</h2>
                <Query query={OBTENER_LIBRO} variables={{id}}>
                    {({loading, error, data, refetch}) => {
                        if (loading) return "Cargando...";
                        if (error) return `Error! ${error.message}`;
                        console.log(data)
                        return(
                            <FormEditBook
                                book={data.obtenerLibro}
                                history={this.props.history}
                                refetch={refetch}
                            />
                        );
                    }}
                </Query>
            </div>
        );
    }
}