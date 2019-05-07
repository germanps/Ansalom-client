import * as React from "react";
import { IPaginationProps } from "./IPaginationProps";
import { IPaginadorState } from "./IPaginadorState";
import "./Pagination.scss";

export default class Pagination extends React.Component<IPaginationProps, IPaginadorState> {
    constructor(props: IPaginationProps) {
        super(props);
        this.state = {
            paginas: Math.ceil(this.props.totalUsuarios / this.props.limite)
        };
    }
    public render(): React.ReactElement<IPaginationProps> {
        const {actual} = this.props;
        const paginas = this.state.paginas;
        const btnAnterior = (actual > 1) ? <button type="button" onClick={this.props.paginaAnterior} className="btn">Anterior</button> : "";
        const btnSiguiente = (actual !== paginas) ? <button type="button" onClick={this.props.paginaSiguiente} className="btn">Siguiente</button> : "";

        return(
            <div className="pagination">{btnAnterior} {btnSiguiente}</div>
        );
    }
}