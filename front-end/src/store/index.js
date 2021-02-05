import {createStore} from 'redux';
import reducers from '../reducers'


const store = createStore(
    reducers,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;

