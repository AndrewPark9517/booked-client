import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';

export function LandingPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/inventory" />;
    }

    return (
        <div className="LandingPage">
            <Link to='/inventory'>Inventory</Link>
            <Link to='/addBook'>Add Book</Link>
            <LoginForm />
            <RegistrationForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);