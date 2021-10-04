import { combineReducers } from "redux";

import massagesReducer from './massagesReducer'

const rootReducer = combineReducers({
    massages: massagesReducer,
})

export default rootReducer;