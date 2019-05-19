import * as React from "react";
import { IMainProps } from "./IMainProps";
import "./Main.scss";
import Header from "../Header/Header";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Users from "./../Users/Users";
import NewUser from "./../NewUser/NewUser";
import EditUser from "./../EditUser/EditUser";
import NewBook from "./../NewBook/NewBook";
import Books from "../Books/Books";
import EditBook from "../EditBook/EditBook";

export default class Main extends React.Component<IMainProps, {}> {
    public render(): React.ReactElement<IMainProps> {
        return(
            <div className="main">
                <HashRouter>
                    <>
                        <Header title="Ansalom Books"/>
                        <Switch>
                            <Route exact path="/" component={Users} />
                            <Route exact path="/user/new" component={NewUser} />
                            <Route exact path="/user/edit/:id" component={EditUser} />
                            <Route exact path="/book/edit/:id" component={EditBook} />
                            <Route exact path="/book/new" component={NewBook} />
                            <Route exact path="/books" component={Books} />
                        </Switch>
                    </>
                </HashRouter>
            </div>
        );
    }
}