import {createStore} from 'redux';
import Reactotron from './../config/reactotron';
import {composeWithDevTools} from 'remote-redux-devtools';

import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({realtime: true, port: 8000});

export default createStore(
  rootReducer,
  composeEnhancers(Reactotron.createEnhancer()),
);
