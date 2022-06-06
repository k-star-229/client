import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

// const logger = store => next => action => {
//   console.log('previous state', store.getState());
//   console.log('dispatching', action);
//   next(action);
//   console.log('next state', store.getState());
// };

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
