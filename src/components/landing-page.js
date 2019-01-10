import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';

export function LandingPage(props) {

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
    displayMode: state
});

export default connect(mapStateToProps)(LandingPage);