import * as React from "react";
import "./NewBook.scss";
import { INewBookProps } from "./INewBookProps";
import { INewBookState } from "../NewUser/INewBookState";
import Button from "../Button/Button";


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
            parrafos: []
        }
    } 

    private nuevoParrafo = () => {
        this.setState({
            parrafos : this.state.parrafos.concat([{parrafo: ""}])
        })
    }
    private borrarParrafo = i => () => {
        
        this.setState({
            parrafos: this.state.parrafos.filter((parrafo, index) => i !== index)
        })
    }
    private leerParrafo = i => e => {
        const nuevoParrafo = this.state.parrafos.map((parrafo, index) => {
            //si los indices son diferentes al que estamos cambiando, los dejas igual
            if(i !== index) return parrafo;
            //si es igual, cojo una copia del state y le agrego el nuevo cambio de párrafo
            return {
                ...parrafo,
                parrafo: e.currentTarget.value
            } 
        });
        this.setState({
            parrafos: nuevoParrafo
        });
    }

    public render(): React.ReactElement<INewBookProps> {
        return(
            <div className="newBook">
            <h2 className="title container">Nuevo libro</h2>
                <form className="form container"
                    /* onSubmit={e => {
                        e.preventDefault();
                        const {nombre, apellido, email, favoritos, descargas, rol, comentarios} = this.state.usuario;
                        // Control de campos vacios
                        if (nombre === "" || apellido === "" || email === "" || rol === "") {
                            this.setState({error: true});
                            return;
                        }
                        this.setState({error: false});
                        const input = {
                            nombre,
                            apellido,
                            email,
                            descargas,
                            rol
                        };
                        crearUsuario({
                            variables: {input}
                        });
                    }} */
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Título</label>
                            <input
                                id="title"
                                type="text"
                                className="form-control"
                                placeholder="Título"
                                /*  onChange={e => {
                                    this.setState({
                                        usuario: {
                                            ...this.state.usuario,
                                            nombre: e.target.value
                                        }
                                    });
                                }} */
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Autor</label>
                            <input
                                id="surname"
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                /* onChange={e => {
                                    this.setState({
                                        usuario: {
                                            ...this.state.usuario,
                                            apellido: e.target.value
                                        }
                                    });
                                }} */
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Género</label>
                            <input
                                id="genero"
                                type="text"
                                className="form-control"
                                placeholder="Género"
                                /* onChange={e => {
                                    this.setState({
                                        usuario: {
                                            ...this.state.usuario,
                                            email: e.target.value
                                        }
                                    });
                                }} */
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Colección</label>
                            <input
                                id="coleccion"
                                type="text"
                                className="form-control"
                                placeholder="Colección"
                                /*  onChange={e => {
                                    this.setState({
                                        usuario: {
                                            ...this.state.usuario,
                                            descargas: e.target.valueAsNumber
                                        }
                                    });
                                }} */
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Epub</label>
                            <input
                                id="epub"
                                type="text"
                                className="form-control"
                                placeholder="Epub"
                                /* onChange={e => {
                                    this.setState({
                                        usuario: {
                                            ...this.state.usuario,
                                            email: e.target.value
                                        }
                                    });
                                }} */
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Cover</label>
                            <input
                                id="cover"
                                type="text"
                                className="form-control"
                                placeholder="Cover"
                                /*  onChange={e => {
                                    this.setState({
                                        usuario: {
                                            ...this.state.usuario,
                                            descargas: e.target.valueAsNumber
                                        }
                                    });
                                }} */
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Pdf</label>
                            <input
                                id="pdf"
                                type="text"
                                className="form-control"
                                placeholder="Pdf"
                                /* onChange={e => {
                                    this.setState({
                                        usuario: {
                                            ...this.state.usuario,
                                            email: e.target.value
                                        }
                                    });
                                }} */
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Sinopsis</label>
                            
                            {
                               this.state.parrafos.map((input, index) => (
                                    <div key={index} className="parrafo">
                                        <span>Párrafo {index + 1}</span>
                                        <input
                                            id="sinopsis"
                                            className="form-control"
                                            onChange={this.leerParrafo(index)}
                                            value={input.parrafo}
                                        />                           
                                        <Button title="Borrar párrafo" background="secondary" _event={this.borrarParrafo(index)}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="form-group">
                            <Button title="Agregar párrafo" background="secondary" _event={this.nuevoParrafo}/>
                        </div>
                        <input type="submit" value="Guardar usuario"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}