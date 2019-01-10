export const ADD_BOOK_TO_INVENTORY = "ADD_BOOK_TO_INVENTORY";
export const addBookToInventory = (title, author = '', stock = 0, price = 0) => ({
    type: ADD_BOOK_TO_INVENTORY,
    title,
    author,
    stock,
    price
})

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

