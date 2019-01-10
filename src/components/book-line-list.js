// will be used to display books in stock in line format (w/out an image of the book)

import React from 'react';
import {connect} from 'react-redux';
import '../styles/book-line-list.css';
import BookLine from './book-line';

export function BookLineList(props) {
    const books = props.bookList.map(book => {
        return (            
            <BookLine key={book.title} book={book} />           
        );
    })
    return (
        <ul className="BookLineList">
            <li key={"categories"} className="category-line">
                <div className="book-line-info">
                    <div className="book-category title">Title</div>
                    <div className="book-category author">Author</div>
                    <div className="book-category stock">Stock</div>
                    <div className="book-category price">Price ($)</div>
                </div>
                <div className="book-line-form">
                    <div className="book-category edit-stock">Edit Stock</div>
                    <div className="book-category edit-price">Edit Price</div>
                    <div className="book-category edit-submit">Submit</div>
                    <div className="book-category edit-delete">Delete</div>
                </div>                
            </li>
            {books}
        </ul>
    );
}

export default connect()(BookLineList);