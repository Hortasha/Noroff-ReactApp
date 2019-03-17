import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import CardPage from './containers/CharacterCards/CardPage/CardPage';
import CardsPage from './containers/CharacterCards/CardsPage/CardsPage';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={CardsPage} />
            <Route path="/character/:id" component={CardPage} />
        </App>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



