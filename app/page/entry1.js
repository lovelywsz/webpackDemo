import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../components/productBox.js';


let attachElement = document.getElementById('content');

ReactDOM.render(<Root name="wang" />, attachElement);