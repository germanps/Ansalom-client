import * as React from "react";
import { IEditUserProps } from "./IEditUserProps";
import "./EditUser.scss";
import { USUARIO_QUERY } from '../../queries'; 
import { Query } from 'react-apollo';
import FormEditUser from "../FormEditUser/FormEditUser";


export default class EditUser extends React.Component<IEditUserProps, {}> {
    public render(): React.ReactElement<IEditUserProps> {
        const { id } = this.props.match.params;
        return(
            <div className="editUser">
                <h2 className="title container">Editar usuario</h2>
                <Query query={USUARIO_QUERY} variables={{id}}>
                    {({loading, error, data}) => {
                        if(loading) return 'Cargando...';
                        if(error) return `Error! ${error.message}`;
                        return(
                            <FormEditUser 

                            />
                        )
                    }}
                </Query>
            </div>
        );
    }
}