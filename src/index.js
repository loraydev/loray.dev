import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('Header'));
registerServiceWorker();
