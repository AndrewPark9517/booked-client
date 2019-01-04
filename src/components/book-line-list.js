// will be used to display books in stock in line format (w/out an image of the book)

import React from 'react';
import {connect} from 'react-redux';
import '../styles/book-line-list.css';

export function BookList(props) {
    const books = props.bookList.map(book => {
        return (
            <li key={book.title}>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.price}</p>
            </li>
        );
    })
    return (
        <ul>
            {books}
        </ul>
    );
}

const mapStateToProps = (state, props) => ({
    bookList: props.bookList
});

export default connect(mapStateToProps)(BookList);