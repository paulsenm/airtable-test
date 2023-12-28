import React from "react";
import ReactDOM  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import './index.css';

const elem = document.getElementById('root');
const root = ReactDOM.createRoot(elem);

root.render(<App/>);