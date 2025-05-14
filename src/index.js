import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'; 

import './index.css';
import App from './App';
import tracks from './reducers';

const store = createStore(tracks)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

reportWebVitals();
