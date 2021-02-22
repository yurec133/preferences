import { combineReducers } from "redux";
import {industriesReducer} from "./industryReducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    preferences: ['store']

}

const rootReducers = combineReducers({
    store: industriesReducer
});

export default persistReducer(persistConfig, rootReducers);