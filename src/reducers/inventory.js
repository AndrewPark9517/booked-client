import {EDIT_BOOK_VALUES, DELETE_BOOK, ADD_BOOK_TO_INVENTORY, CHANGE_SORT_CATEGORY} from '../actions/inventory';

const initialState = {
    displayMode: "list",
    sortBy: "stock",
    books: [
        {
            title: "Harry Potter 1",
            author: "JK Rowling",
            price: 13,
            stock: 2
        },
        {
            title: "Crime and Punishment",
            author: "Dostoevsky",
            price: 11,
            stock: 6
        },
        {
            title: "12 Rules for Life",
            author: "Jordan Peterson",
            price: 12,
            stock: 5
        }
    ]
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
    else if(action.type === ADD_BOOK_TO_INVENTORY) {
        const book = {
            title: action.title,
            author: action.author,
            stock: action.stock,
            price: action.price
        }
        return Object.assign({}, state, {books: [...state.books, book]});
    }
    else if(action.type === CHANGE_SORT_CATEGORY) {
        return Object.assign({}, state, {sortBy: action.category});
    }

    return state;
}