import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {

    onSubmit(values) {
        console.log(values);
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {error}
                <label htmlFor="username">Username: </label>
                <Field component={Input} type="text" name="username" 
                validate={[required, nonEmpty]}/>
                <label htmlFor="password">Password: </label>
                <Field component={Input} type="text" name="password" 
                validate={[required, nonEmpty]}/>
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "login"
})(LoginForm)