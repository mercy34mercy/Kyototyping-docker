import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterConfig } from './RouterConfig';

ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>
    <RouterConfig></RouterConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Test></Test>
//   </React.StrictMode>,
//   document.getElementById('test')
// );
