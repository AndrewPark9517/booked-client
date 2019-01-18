import React  from 'react';
import { reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import { editBookInInventory, deleteBookInInventory } from '../actions/inventory';
import Input from './input';
import { required, nonEmpty, isTrimmed, isWholeNumber, hasTwoDecimals } from '../validators';
import '../styles/inventory-form-web.css';

export class InventoryFormWeb extends React.Component {

    onSubmit(values) {
        return this.props.dispatch(editBookInInventory(this.props.book.title, values.stock, values.price));
    }

    onDelete(title) {
        return this.props.dispatch(deleteBookInInventory(title));
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} className="InventoryFormWeb">
                <div className="category edit-stock">
                    <Field component={Input} type="number" name="stock" 
                    validate={[required, nonEmpty, isTrimmed, isWholeNumber]}/>
                </div>
                <div className="category edit-price">
                    <Field component={Input} type="number" name="price" 
                    validate={[required, nonEmpty, isTrimmed, hasTwoDecimals]}/>
                </div>
                <div className="category edit-submit">
                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
                </div>
                <div className="category edit-delete">
                    <button type="button" onClick={() => this.onDelete(this.props.book.title)}>Delete</button>
                </div>
                
            </form>
        );
    }
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InventoryFormWeb = reduxForm({
    enableReinitialize: true,
    destroyOnUnmount: false
  })(InventoryFormWeb)
  
  // You have to connect() to any reducers that you wish to connect to yourself
  InventoryFormWeb = connect(
    (state, props) => ({
      form: props.book.title,
      initialValues: {
         "stock": props.book.stock.toString(),
         "price": props.book.price.toString()
      }
    })
  )(InventoryFormWeb)
  
  export default InventoryFormWeb


