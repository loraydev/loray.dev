import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Article from './Article';
import PostCard from './PostCard';
import Latest from './Latest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('Header'));
if (document.getElementById('Article')) {
  let name = document.getElementById('Article').getAttribute('name');
  ReactDOM.render(<Article name={name} />, document.getElementById('Article'));
}

if (document.getElementById('Latest')) {
  ReactDOM.render(<Latest />, document.getElementById('Latest'));
}
registerServiceWorker();
