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

export default store;
