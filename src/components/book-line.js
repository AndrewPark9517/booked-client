import React from 'react';
import { connect } from 'react-redux';
import '../styles/book-line.css';
import InventoryFormWeb from './inventory-form-web';

export function BookLine(props) {
    return (
        <li className="BookLine">
            <div className="book-line-info">
                <div className="category title">{props.book.title}</div>
                <div className="category author">{props.book.author}</div>
                <div className="category stock">{props.book.stock}</div>
                <div className="category price">{props.book.price}</div>
            </div>
            <div className="book-line-form">              
                <InventoryFormWeb book={props.book} />                    
            </div>
        </li>
    );
}

export default connect()(BookLine);