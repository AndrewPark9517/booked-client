import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { required, nonEmpty} from '../validators';
import { login } from '../actions/auth';

export class LoginForm extends React.Component {

    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
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
            <form className="LoginForm" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {error}
                
                <Field component={Input} type="text" name="username" placeholder="Username"
                validate={[required, nonEmpty]}/>
                
                <Field component={Input} type="text" name="password" placeholder="Password"
                validate={[required, nonEmpty]}/>
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>Login</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "login"
})(LoginForm);