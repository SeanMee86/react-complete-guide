import {combineReducers} from "redux";

import counterReducer from './counter';
import resultReducer from './result';
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

export default rootReducer;