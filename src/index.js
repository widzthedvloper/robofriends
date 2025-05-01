import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css'; 
import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { searchReducer } from './reducers';
import { createLogger } from 'redux-logger';
import {thunk} from "redux-thunk"

const logger = createLogger();
const store = createStore(searchReducer, applyMiddleware(thunk,logger))



const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
</Provider>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
