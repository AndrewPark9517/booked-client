import React  from 'react';
import { reduxForm, Field} from 'redux-form';
import {addBookToInventory} from '../actions/inventory';
import Input from './input';
import {required, nonEmpty, isTrimmed, isWholeNumber} from '../validators';
import '../styles/inventory-add-book-form.css';

export class InventoryAddBookForm extends React.Component {

    onSubmit(values) {
        return this.props
            .dispatch(addBookToInventory(values.title, values.author, values.stock, values.price))
            .then(() => this.props.history.push('/inventory'));
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} className="InventoryAddBookForm">
                <h3>Book Information</h3>
                <div className="newBookInput">
                    <label htmlFor="title">title: </label>    
                    <Field component={Input} type="text" name="title" validate={[required, nonEmpty, isTrimmed]}/>
                </div>
                <div className="newBookInput">
                    <label>author: </label>
                    <Field component={Input} type="text" name="author" validate={[required, nonEmpty, isTrimmed]}/>
                </div>
                <div className="newBookInput">
                    <label htmlFor="stock">stock: </label>
                    <Field component={Input} type="number" name="stock" validate={[required, nonEmpty, isTrimmed, isWholeNumber]}/>
                </div>
                <div className="newBookInput">
                    <label htmlFor="price">price: </label>
                    <Field component={Input} type="number" name="price" validate={[required, nonEmpty, isTrimmed, isWholeNumber]}/>
                </div>
                <div >
                    <button type="submit" disabled={this.props.submitting}>Submit</button>
                </div>                
            </form>
        );
    }
}


export default reduxForm({
    form: "addBook"
})(InventoryAddBookForm)


