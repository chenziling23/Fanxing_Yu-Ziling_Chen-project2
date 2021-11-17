import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Landing from './Landing';
import ReactDOM from 'react-dom';
import PlayGround from './PlayGround';
import FreePlay from "./FreePlay";
import Rules from './Rules';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store = {store}>
    <Router>
        <Switch>
            <Route path="/normal" component={PlayGround} />
            <Route path="/free" component={FreePlay} />
            <Route path="/rules" component={Rules} />
            <Route path="/" exact component={Landing} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

