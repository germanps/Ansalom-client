import * as React from "react";
import {IFormEditBookProps} from "./IFormEditBookProps";
import {IFormBookState} from "./IFormEditBookState";
import "./FormEditBook.scss";
import { ACTUALIZAR_LIBRO } from "./../../mutations/index";
import { Mutation } from "react-apollo";
import Button from "../Button/Button";

export default class FormEditBook extends React.Component<IFormEditBookProps, IFormBookState> {
    constructor(props: IFormEditBookProps) {
        super(props);
        this.state = {
            book: this.props.book,
            sinopsis: this.props.book.sinopsis
        };
    }

    private nuevoParrafo = () => {
        this.setState({
            sinopsis : this.state.sinopsis.concat([{parrafo: ""}])
        });
    }
    private borrarParrafo = i => () => {
        this.setState({
            sinopsis: this.state.sinopsis.filter((parrafo, index) => i !== index)
        });
    }

    private leerParrafo = i => e => {
        const nuevoParrafo = this.state.sinopsis.map((parrafo, index) => {
            //si los indices son diferentes al que estamos cambiando, los dejas igual
            if (i !== index) return parrafo;
            //si es igual, cojo una copia del state y le agrego el nuevo cambio de párrafo
            return {
                ...parrafo,
                parrafo: e.currentTarget.value
            };
        });
        this.setState({
            sinopsis: nuevoParrafo
        });
    }

    public render(): React.ReactElement<IFormEditBookProps> {
        const {titulo, autor, genero, coleccion, cover, epub, pdf} = this.props.book;
        return(
            <div className="editBook">
                <Mutation
                    mutation={ACTUALIZAR_LIBRO}
                    onCompleted={ () => this.props.refetch().then(() => {
                        this.props.history.push("/books");
                    })}
                >
                    {actualizarLibro => (
                        <form className="form container"
                            onSubmit={e => {
                                e.preventDefault();
                                const {id, titulo, autor, genero, coleccion, cover, epub, pdf} = this.state.book;
                                const {sinopsis} = this.state;
                                const input = {
                                    id, titulo, autor, genero, coleccion, cover, epub, pdf, sinopsis
                                };
                                console.log(input);
                                actualizarLibro({
                                    variables: {input}
                                });
                            }}
                        >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="titulo">Titulo</label>
                                <input
                                    id="titulo"
                                    type="text"
                                    className="form-control"
                                    defaultValue={titulo}
                                    onChange={e => {
                                        this.setState({
                                            book: {
                                                ...this.state.book,
                                                titulo: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="autor">Autor</label>
                                <input
                                    id="autor"
                                    type="text"
                                    className="form-control"
                                    defaultValue={autor}
                                    onChange={e => {
                                        this.setState({
                                            book: {
                                                ...this.state.book,
                                                autor: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group">
                                <label htmlFor="genero">Genero</label>
                                <input
                                    id="genero"
                                    type="genero"
                                    className="form-control"
                                    defaultValue={genero}
                                    onChange={e => {
                                        this.setState({
                                            book: {
                                                ...this.state.book,
                                                genero: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coleccion">Coleccion</label>
                                <input
                                    id="coleccion"
                                    type="coleccion"
                                    className="form-control"
                                    defaultValue={coleccion}
                                    onChange={e => {
                                        this.setState({
                                            book: {
                                                ...this.state.book,
                                                coleccion: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                            
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="epub">Epub</label>
                                <input
                                        id="epub"
                                        type="text"
                                        className="form-control"
                                        defaultValue={epub}
                                        onChange={e => {
                                            this.setState({
                                                book: {
                                                    ...this.state.book,
                                                    epub: e.target.value
                                                }
                                            });
                                        }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cover">Cover</label>
                                <input
                                    id="cover"
                                    type="cover"
                                    className="form-control"
                                    defaultValue={cover}
                                    onChange={e => {
                                        this.setState({
                                            book: {
                                                ...this.state.book,
                                                cover: e.target.value
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="pdf">Pdf</label>
                                <input
                                        id="pdf"
                                        type="text"
                                        className="form-control"
                                        defaultValue={pdf}
                                        onChange={e => {
                                            this.setState({
                                                book: {
                                                    ...this.state.book,
                                                    pdf: e.target.value
                                                }
                                            });
                                        }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Sinopsis</label>
                                {
                                    this.state.sinopsis.map((input, index) => (
                                        <div key={index} className="parrafo">
                                            <span>Párrafo {index + 1}</span>
                                            
                                            <textarea
                                                id="sinopsis"
                                                className="form-control"
                                                onChange={this.leerParrafo(index)}
                                            >
                                                {input.parrafo}
                                            </textarea>
                                            <Button title="Borrar párrafo" background="delete" _event={this.borrarParrafo(index)}/>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="form-group">
                                <Button
                                    title="Agregar párrafo"
                                    background="secondary"
                                    _event={this.nuevoParrafo}
                                />
                            </div>
                            <input type="submit" value="Guardar libro"/>
                        </div>      
                    </form>
                )}
            </Mutation>
        </div>
        );
    }
}
