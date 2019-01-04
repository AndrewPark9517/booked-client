import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import {LandingPage} from './landing-page';
import {InventoryPage} from './inventory-page';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
library.add(faList);
library.add(faPause);

export class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/inventory' component={InventoryPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps)(App));