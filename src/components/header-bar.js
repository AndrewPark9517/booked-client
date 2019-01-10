import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/header-bar.css';

export class HeaderBar extends React.Component {
    render() {
        let link;
        if(this.props.page === "inventory") {
            link = <Link to="/addBook">Add Book</Link>
        }
        else if(this.props.page === "addBook") {
            link = <Link to="/inventory">Inventory</Link>
        }
        
        return (
            <div className="HeaderBar">
                <Link className="header" to="/inventory"><h1>Booked</h1></Link>
                <div className="links">
                    { link }
                    <Link to="/">Logout</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(HeaderBar);