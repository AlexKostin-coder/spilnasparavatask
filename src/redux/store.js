import {
    applyMiddleware,
    createStore
} from 'redux';

import { api } from '../core/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import thunk from "redux-thunk";

const store = createStore(reducers, composeWithDevTools({})(applyMiddleware(thunk.withExtraArgument(api))));

export default store;
