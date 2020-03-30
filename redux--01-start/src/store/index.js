import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import {logger} from "./middleware/logger";

const composeEnhancers = (
        typeof window !== 'undefined'
        &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;