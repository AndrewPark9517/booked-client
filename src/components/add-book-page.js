import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import HeaderBar from './header-bar';
import InventoryAddBookForm from './inventory-add-book-form';

export function AddBookPage(props) {

    return (
        <div className="AddBookPage">
            <HeaderBar page="addBook" />
            <div className="add-book-form">
                <h2>Add a book of your choice!</h2>
                <InventoryAddBookForm {...props} /> 
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(AddBookPage);