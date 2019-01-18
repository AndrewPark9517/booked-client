import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import '../styles/header-bar.css';

export class HeaderBar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let link;
        if(this.props.page === "inventory") {
            link = <Link to="/addBook"><button>Add Book</button></Link>
        }
        else if(this.props.page === "addBook") {
            link = <Link to="/inventory"><buttton>Inventory</buttton></Link>
        }

        let log;
        if(this.props.loggedIn) {
            log = <button onClick={() => this.logOut()}>Logout</button>
        }
        
        return (
            <div className="HeaderBar">
                <Link className="header" to="/inventory"><h1>Booked</h1></Link>
                <div className="links">
                    { link }
                    { log }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(HeaderBar);