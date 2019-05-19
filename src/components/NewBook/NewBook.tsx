import * as React from "react";
import "./NewBook.scss";
import { INewBookProps } from "./INewBookProps";
import { INewBookState } from "../NewUser/INewBookState";
import Button from "../Button/Button";
import { NUEVO_LIBRO } from "./../../mutations";
import { Mutation } from "react-apollo";


export default class NewBook extends React.Component<INewBookProps, INewBookState> {
    constructor(props: INewBookProps) {
        super(props);
        this.state = {
            libro: {
                id: "",
                titulo: "",
                autor: "",
                genero: "",
                coleccion: "",
                cover: "",
                epub: "",
                pdf: "",
            },
            error: false,
            sinopsis: []
        };
    }

    private actualizarState = e => {
        const {name, value} = e.target;
        console.log(`${name}: ${value}`);
        this.setState({
            libro: {
               ...this.state.libro,
               [name] :  value
            }
        });
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

    private validaForm = () => {
        const {titulo, autor, genero, coleccion, cover, epub, pdf} = this.state.libro;
        const error = !titulo || !autor || !genero || !coleccion || !cover || !epub || !pdf;
        return error;
    }

    public render(): React.ReactElement<INewBookProps> {
        return(
            <div className="newBook">
                <h2 className="title container">Nuevo libro</h2>
                <Mutation
                    mutation={ NUEVO_LIBRO }
                    onCompleted={ () => this.props.history.push("/books")}
                >
                {nuevoLibro => (
                    <form className="form container"
                        onSubmit={e => {
                            e.preventDefault();
                            const {titulo, autor, genero, coleccion, cover, epub, pdf} = this.state.libro;
                            const {sinopsis} = this.state;
                            const input = {titulo, autor, genero, coleccion, cover, epub, pdf, sinopsis};
                            nuevoLibro({
                                variables: {input}
                            });
                        }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input
                                    id="title"
                                    type="text"
                                    name="titulo"
                                    className="form-control"
                                    placeholder="Título"
                                    onChange={this.actualizarState}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="autor">Autor</label>
                                <input
                                    id="autor"
                                    type="text"
                                    name="autor"
                                    className="form-control"
                                    placeholder="Apellido"
                                    onChange={this.actualizarState}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="genero">Género</label>
                                <input
                                    id="genero"
                                    type="text"
                                    name="genero"
                                    className="form-control"
                                    placeholder="Género"
                                    onChange={this.actualizarState}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coleccion">Colección</label>
                                <input
                                    id="coleccion"
                                    type="text"
                                    name="coleccion"
                                    className="form-control"
                                    placeholder="Colección"
                                    onChange={this.actualizarState}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="epub">Epub</label>
                                <input
                                    id="epub"
                                    type="text"
                                    name="epub"
                                    className="form-control"
                                    placeholder="Epub"
                                    onChange={this.actualizarState}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cover">Cover</label>
                                <input
                                    id="cover"
                                    type="text"
                                    name="cover"
                                    className="form-control"
                                    placeholder="Cover"
                                    onChange={this.actualizarState}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="pdf">Pdf</label>
                                <input
                                    id="pdf"
                                    type="text"
                                    name="pdf"
                                    className="form-control"
                                    placeholder="Pdf"
                                    onChange={this.actualizarState}
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
                                            {/* <input
                                                id="sinopsis"
                                                className="form-control"
                                                onChange={this.leerParrafo(index)}
                                                value={input.parrafo}
                                            /> */}
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
                            <input  disabled={this.validaForm()} type="submit" value="Guardar libro"/>
                        </div>
                    </form>
                )}
                </Mutation>
            </div>
        );
    }
}