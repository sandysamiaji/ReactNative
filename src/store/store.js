import {createStore} from 'redux';
import reducers from '../slice/reducers';

const store = createStore(reducers);

export default store;
