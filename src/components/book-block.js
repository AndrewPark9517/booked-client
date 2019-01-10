import React from 'react';
import { connect } from 'react-redux';
import InventoryFormMobile from './inventory-form-mobile';
import '../styles/book-block.css';

export function BookBlock(props) {
    return (
        <li className="bookBlock">
            <div className="title-author">
                <span className="block-title">{props.book.title}</span> by <span 
                className="block-author">{props.book.author}</span>
            </div>
            <div>
                <span className="stock">Stock: {props.book.stock}</span>  
                <span className="price">Price: ${props.book.price}</span>
            </div>
            <InventoryFormMobile book={props.book} />
        </li>
    );
}

const mapStateToProps = (state, props) => ({
    book: props.book
})

export default connect(mapStateToProps)(BookBlock);
