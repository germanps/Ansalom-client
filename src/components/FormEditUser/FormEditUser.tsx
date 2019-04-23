import * as React from "react";
import { IFormEditUserProps } from "./IFormEditUserProps";
import "./FormEditUser.scss";


export default class FormEditUser extends React.Component<IFormEditUserProps, {}> {
    constructor(props: IFormEditUserProps) {
        super(props);
        this.state = {

        }
    }

    public render(): React.ReactElement<IFormEditUserProps> {
        return(
            <form className="form container"
            >
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={e => {
                            console.log(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="surname">Apellido</label>
                    <input
                        id="surname"
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        onChange={e => {
                            console.log(e.target.value); 
                        }}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={e => {
                            console.log(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Tipo Usuario</label>
                    <select
                        className="form-control"
                        onChange={e => {
                            console.log(e.target.value);
                        }}
                    >
                        <option value="">Elegir...</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="PARTICIPANTE">PARTICIPANTE</option>
                        <option value="MODERADOR">MODERADOR</option>
                    </select>
                </div>
            </div>
            <div className="form-row">
                <input type="submit" value="Guardar usuario"/>
            </div>
        </form>
        );
    }
}


