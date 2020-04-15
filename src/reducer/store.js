import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewarre = [logger];

const store = createStore( rootReducer , applyMiddleware(...middlewarre));

export default store;