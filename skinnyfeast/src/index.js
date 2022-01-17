import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Account from './components/Account';
import Shop from './components/Shop';
import About from './components/About';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/account" component={Account} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>, 
  document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
