import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import inventoryReducer from './reducers/inventory';

const store = createStore(
    combineReducers({
        form: formReducer,
        inventory: inventoryReducer
    }),
    applyMiddleware(thunk)
);

console.log(store.getState());

export default store;
