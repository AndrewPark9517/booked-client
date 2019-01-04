// will be used to display books in stock in block format (w/ images of the books included)

import React from 'react';
import {connect} from 'react-redux';
import '../styles/book-block-list.css';

export function BookList(props) {
    const books = props.bookList.map(book => {
        return (
            <li key={book.title}>
                <p>{book.title}</p>
                <div className="book-image"></div>
                <p>{book.author}</p>
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