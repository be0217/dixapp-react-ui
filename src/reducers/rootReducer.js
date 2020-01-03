import {combineReducers} from 'redux';
import simpleReducer from './simpleReducer';
import authReducer from "./authReducer";
import socketReducer from "./socketReducer";

export default combineReducers({
    simpleReducer, authReducer, socketReducer
});
