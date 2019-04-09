import * as React from "react";
import { IMainProps } from "./IMainProps";
import "./Main.scss";
import Header from "../Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "../Users/Users";
import NewUser from "../NewUser/NewUser";
import EditUser from "../EditUser/EditUser";

export default class Main extends React.Component<IMainProps, {}> {
    public render(): React.ReactElement<IMainProps> {
        return(
            <div className="main">
                <Router>
                    <Header title="Ansalom Books"/>
                    <Switch>
                        <Route exact path="/" component={Users} />
                        <Route exact patch="/user/new" component={NewUser} />
                        <Route exact patch="/user/edit/:id" component={EditUser} />
                    </Switch>
                </Router>
            </div>
        );
    }
}