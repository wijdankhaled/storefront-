import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/';


function Main() {
    return (
        <>
            <Provider store={store}>
                <App />
            </Provider>
        </>
    );
}



const root = document.getElementById('root');
ReactDOM.render(<Main />, root);