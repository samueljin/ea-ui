import { combineReducers } from 'redux';
import {races } from './races.reducer';
import {standings } from './standings.reducer';


const rootReducer = combineReducers({
    races,
    standings
});

export default rootReducer;