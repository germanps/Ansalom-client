import * as React from "react";
import { IPaginationProps } from "./IPaginationProps";
import "./Pagination.scss";

export default class Pagination extends React.Component<IPaginationProps, {}> {
    constructor(props: IPaginationProps) {
        super(props);
        this.state = {

        };
    }
    public render(): React.ReactElement<IPaginationProps> {
        const {actual} = this.props;
        const btnAnterior = (actual > 1) ? <button type="button" className="btn">Anterior</button> : "";
        return(
            <div className="pagination">{btnAnterior}</div>
        );
    }
}