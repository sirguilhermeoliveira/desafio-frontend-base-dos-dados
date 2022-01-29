import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyle from './theme/globalStyle';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <Home />
  </Fragment>,
  document.getElementById('root')
);
