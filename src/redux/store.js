import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import { compose } from 'redux';

export default createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined" ? 
            (a) => a
        : 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);




