import React  from 'react';
import { reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import { editBookInInventory, deleteBookInInventory } from '../actions/inventory';
import Input from './input';
import { required, nonEmpty, isWholeNumber, hasTwoDecimals } from '../validators';
import '../styles/inventory-form-mobile.css';

export class InventoryFormMobile extends React.Component {

    onSubmit(values) {
        return this.props.dispatch(editBookInInventory(this.props.book.title, values.stock, values.price));
    }

    onDelete(title) {
        return this.props.dispatch(deleteBookInInventory(title));
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} className="InventoryFormMobile">
                <div className="stock-price">
                    <label htmlFor="stock">Stock: </label>
                    <Field component={Input} type="number" name="stock" validate={[required, nonEmpty, isWholeNumber]} />
                    <label htmlFor="price">Price: $</label>
                    <Field component={Input} type="number" name="price" validate={[required, nonEmpty, hasTwoDecimals]} />
                </div>
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>   
                <button className = "delete" type="button" onClick={() => this.onDelete(this.props.book.title)}>Delete</button>
            </form>
        )
    }
}

InventoryFormMobile = reduxForm({
    enableReinitialize: true,
    destroyOnUnmount: false
})(InventoryFormMobile)

InventoryFormMobile = connect(
    (state, props) => ({
      form: props.book.title,
      initialValues: {
         "stock": props.book.stock.toString(),
         "price": props.book.price.toString()
      }
    })
  )(InventoryFormMobile)
  
  export default InventoryFormMobile