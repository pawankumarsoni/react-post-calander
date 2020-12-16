import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';

// Calander Page
import Calander from './containers/calander';

// Error 404 Page
import PageNotFound from './containers/404';


class Root extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/calander" component={Calander} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </BrowserRouter >
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();