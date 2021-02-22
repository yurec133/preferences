import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
);

const persistor = persistStore(store)

window.store = store;

export {store, persistor};