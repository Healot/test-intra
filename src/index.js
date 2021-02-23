import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {api} from './api';
// console.log(JSON.stringify(process.env, null, 2));

api.getTasks().then(
  (x) => console.log(1, x),
  (x) => console.log(2, x.message),
);

api.getTask(88097).then(
  (x) => console.log(1, x),
  (x) => console.log(2, x.message),
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
