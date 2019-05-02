import * as React from "react";
import { IUsersProps } from "./IUsersProps";
import { IUserState } from "./IUserState";
import "./Users.scss";
import { Query } from "react-apollo";
import { USUARIOS_QUERY } from "./../../queries";
import UserItem from "../UserList/UserItem";
import UserModalView from "../UserModalView/UserModalView";
import Pagitation from "./../Pagination/Pagination";


export default class Users extends React.Component<IUsersProps, IUserState> {
    constructor(props: IUsersProps){
        super(props);
        this.state = {
            showModal: false,
            user: {},
            paginador: {
                offset: 0,
                actual: 1
            }
        };
    }

    private controlModal(showModal){
        this.setState({showModal});
    }

    private showModalUserInfo(user){
        this.setState({
            showModal: true,
            user
        });
    }
    public render(): React.ReactElement<IUsersProps> {
        return (
            <>
                <Query query={USUARIOS_QUERY} pollInterval={1000}>
                    {({ loading, error, data, startPolling, stopPolling }) => {
                        if (loading) return "Cargando...";
                        if (error) return `Error ${error.message}`
                        console.log(data);
                        return(
                            <div className="container">
                                <h2 className="title">Listado usuarios</h2>
                                <ul className="userList">
                                    <li className="listHeadings">
                                        <span className="name">Nombre</span>
                                        <span className="email">Email</span>
                                        <span className="downloads">Descargas</span>
                                        <span className="rol">Rol</span>
                                        <span className="action"></span>
                                    </li>
                                    {
                                        data.getUsuarios.map(item => {
                                            return <UserItem key={item.id} usuario={item} onUserInfoView={this.showModalUserInfo.bind(this)}/> ;
                                        })
                                    }
                                </ul>
                                <Pagitation actual={this.state.paginador.actual}/>
                            </div>
                        );
                    }}
                </Query>
                {this.state.showModal ? <UserModalView user={this.state.user} _handleModalAppear={ () => this.controlModal(false)}/> : ""}
            </>
        );
    }
}