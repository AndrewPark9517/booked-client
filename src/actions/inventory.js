import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';

export const EDIT_BOOK_VALUES = "EDIT_BOOK_VALUES";
export const editBookValues = (title, stock, price) => ({
    type: EDIT_BOOK_VALUES,
    title,
    stock,
    price
})

export const DELETE_BOOK = "DELETE_BOOK";
export const deleteBook = (title) => ({
    type: DELETE_BOOK, 
    title
})

export const CHANGE_SORT_CATEGORY = "CHANGE_SORT_CATEGORY";
export const changeSortCategory = (category) => ({
    type: CHANGE_SORT_CATEGORY,
    category
})

// Will use FETCH_INVENTORY_SUCCESS for all successful fetch requests to /inventory
export const FETCH_INVENTORY_SUCCESS = 'FETCH_INVENTORY_SUCCESS';
export const fetchInventorySuccess = books => ({
    type: FETCH_INVENTORY_SUCCESS,
    books
});

// Will use FETCH_INVENTORY_ERROR for all failed fetch requests to /inventory
export const FETCH_INVENTORY_ERROR = 'FETCH_INVENTORY_ERROR';
export const fetchInventoryError = error => ({
    type: FETCH_INVENTORY_ERROR,
    error
});

export const fetchInventory = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log("Making fetch request to Mongo database to get inventory");
    return fetch(`${API_BASE_URL}/inventory`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            return res.json()})
        .then(json => {
            return dispatch(fetchInventorySuccess(json.books))
        })
        .catch(err => {
            dispatch(fetchInventoryError(err))
        });
};

export const addBookToInventory = (title, author, stock, price) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/inventory/addBook`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({title: title, author: author, stock: stock, price: price})
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
        return res.json();
    })
    .then(json => {
        console.log('json file in addBookToInventory: ', json);
        return dispatch(fetchInventorySuccess(json.books));
    })
    .catch(err => {
        dispatch(fetchInventoryError(err));
        const {reason, message, location} = err;
            if (reason === 'SubmissionError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
    })
};

export const editBookInInventory = (title, stock, price) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/inventory/edit`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({title: title, stock: stock, price: price})
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
        return res.json();
    })
    .then(json => {
        return dispatch(fetchInventorySuccess(json.books));
    })
    .catch(err => {
        dispatch(fetchInventoryError(err))
    })
};

export const deleteBookInInventory = (title) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/inventory/delete`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({title: title})
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
        return res.json();
    })
    .then(json => {
        return dispatch(fetchInventorySuccess(json.books));
    })
    .catch(err => {
        dispatch(fetchInventoryError(err))
    })
};

