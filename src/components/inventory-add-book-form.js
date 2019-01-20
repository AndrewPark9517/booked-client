import React  from 'react';
import { reduxForm, Field} from 'redux-form';
import {addBookToInventory} from '../actions/inventory';
import Input from './input';
import {required, nonEmpty, isTrimmed, isWholeNumber, hasTwoDecimals, isPositive} from '../validators';
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
                    <Field component={Input} type="text" name="title" placeholder="Title"
                    validate={[required, nonEmpty, isTrimmed]}/>
                </div>
                <div className="newBookInput">
                    <Field component={Input} type="text" name="author" placeholder="Author"
                    validate={[required, nonEmpty, isTrimmed]}/>
                </div>
                <div className="newBookInput">
                    <Field component={Input} type="number" name="stock" placeholder="Stock"
                    validate={[required, nonEmpty, isTrimmed, isWholeNumber, isPositive]}/>
                </div>
                <div className="newBookInput">
                    <Field component={Input} type="number" name="price" placeholder="Price"
                    validate={[required, nonEmpty, isTrimmed, hasTwoDecimals, isPositive]}/>
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
})(InventoryAddBookForm);


