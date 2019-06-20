import * as React from "react";
import {IAppProps} from "./IAppProps";
import "./App.scss";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

import Main from "./components/Main/Main";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    //enviar token al servidor
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization : token
            }
        })
    },
    //desbilitar los _typenames
    cache: new InMemoryCache({
        addTypename: false
    }),
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