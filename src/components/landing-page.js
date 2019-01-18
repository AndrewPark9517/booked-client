import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';
import '../styles/landing-page.css';

export function LandingPage(props) {

    if (props.loggedIn) {
        return <Redirect to="/inventory" />;
    }

    return (
        <div className="landing-page-container">
            <div className="LandingPage">   
                <h1 className="app-title">Booked</h1>
                <h2 className="app-summary">An Inventory App for Printed Materials</h2>
                <div className="forms-container">
                    <div className="login-container">
                        <h3 className="form-title">Login</h3>
                        <LoginForm />
                    </div>
                    <div className="register-container">
                        <h3 className="form-title">Register</h3>
                        <RegistrationForm />    
                    </div>
                </div>                    
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);