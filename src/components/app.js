import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import LandingPage from './landing-page';
import InventoryPage from './inventory-page';
import AddBookPage from './add-book-page';

export class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/inventory' component={InventoryPage} />
                <Route exact path='/addBook' component={AddBookPage} />
            </div>
        );
    }
}

export default withRouter(connect()(App));