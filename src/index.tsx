import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import {RootSession} from "./App";
import "./index.scss";
import ReactDOM = require("react-dom");
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";


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

ReactDOM.render(
    <ApolloProvider client={client}>
        <RootSession />
    </ApolloProvider>, 
    document.getElementById('root')
);