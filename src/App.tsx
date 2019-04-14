import * as React from "react";
import {IAppProps} from "./IAppProps";
import "./App.scss";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Main from "./components/Main/Main";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    onError: ({networkError, graphQLErrors}) => {
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
})

export default class App extends React.Component<IAppProps, {}> {
    public render(): React.ReactElement<IAppProps> {
        return (
            <ApolloProvider client={client}>
                <Main />
            </ApolloProvider>
        );
    }
}