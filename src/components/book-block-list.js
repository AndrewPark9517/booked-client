// will be used to display books in stock in block format (w/ images of the books included)

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/book-block-list.css';
import BookBlock from './book-block';

export function BookBlockList(props) {
    const books = props.bookList.map(book => {
        return (            
             <BookBlock key={book.title} book={book} />            
        );
    })
    return (
        <ul className="book-block-list">
            {books}
            <li>
                <Link className="add-book-link" to="/addBook">Add a book...</Link>
            </li>
        </ul>
    );
}

const mapStateToProps = (state, props) => ({
    bookList: props.bookList
});

export default connect(mapStateToProps)(BookBlockList);