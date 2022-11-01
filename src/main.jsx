import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { Provider } from 'react-redux/es/exports';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
