import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requries-login';
import HeaderBar from './header-bar';
import InventoryAddBookForm from './inventory-add-book-form';
import '../styles/add-book-page.css';

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

export default requiresLogin()(connect()(AddBookPage));