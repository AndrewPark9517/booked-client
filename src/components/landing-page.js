import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function LandingPage(props) {
    
    return (
        <div className="LandingPage">
            <div>Hello World</div>
            <Link to='/inventory'>Inventory</Link>
        </div>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(LandingPage);