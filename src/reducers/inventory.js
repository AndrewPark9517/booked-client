import {EDIT_BOOK_VALUES, DELETE_BOOK, CHANGE_SORT_CATEGORY, FETCH_INVENTORY_SUCCESS, FETCH_INVENTORY_ERROR} from '../actions/inventory';

const initialState = {
    displayMode: "list",
    sortBy: "stock",
    error: '',
    books: []
};

export default function reducer(state = initialState, action) {
    if (action.type === EDIT_BOOK_VALUES) {
        const editedBooksList = state.books.map(book => {
            if(book.title === action.title) {
                return {
                    title: book.title,
                    author: book.author,
                    stock: action.stock,
                    price: action.price
                }
            }
            return book;
        })
        return Object.assign({}, state, {books: editedBooksList});
    }
    else if(action.type === DELETE_BOOK) {
        const editedBooksList = state.books.filter(book => book.title !== action.title);
        return Object.assign({}, state, {books: editedBooksList});
    }
    else if(action.type === CHANGE_SORT_CATEGORY) {
        return Object.assign({}, state, {sortBy: action.category});
    }
    else if(action.type === FETCH_INVENTORY_SUCCESS) {
        return Object.assign({}, state, {books: action.books , error: ''})
    }
    else if(action.type === FETCH_INVENTORY_ERROR) {
        return Object.assign({}, state, {error: action.error})
    }

    return state;
}