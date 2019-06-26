import * as React from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import Session from './components/Session/Session';

const App = ({refetch, session}) => {
    return (    
        <Main refetch={refetch} session={session}/>
    );
}

// export default class App extends React.Component<IAppProps, {}> {
//     public render(): React.ReactElement<IAppProps> {
//         return (
//             <ApolloProvider client={client}>
//                 <Main />
//             </ApolloProvider>
//         );
//     }
// }

const RootSession = Session(App);
export { RootSession }