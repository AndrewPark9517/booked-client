import React from 'react';
import {connect} from 'react-redux';
import BookBlockList from './book-block-list';
import BookLineList from './book-line-list';
import HeaderBar from './header-bar';
import requiresLogin from './requries-login';
import '../styles/inventory-page.css';
import MediaQuery from 'react-responsive';
import { changeSortCategory } from '../actions/inventory';

export class InventoryPage extends React.Component {

    sortByCategory(category, bookList) {

    }

    render() {

        let bookList;
        let sort = this.props.sortBy;
        if(sort) {
            bookList = this.props.books.concat().sort(function(a,b){
                if(a[sort] < b[sort]) return -1;
                else if(a[sort] > b[sort]) return 1;
                else return 0;
              });
        }
        else {
            bookList = this.props.bookList;
        }

        return (
            <div className='InventoryPage'>
                <HeaderBar page="inventory" />
                <div className="sort-buttons">
                    <button type="button" onClick={() => this.props.dispatch(changeSortCategory("title"))}>title</button>
                    <button type="button" onClick={() => this.props.dispatch(changeSortCategory("author"))}>author</button>
                    <button type="button" onClick={() => this.props.dispatch(changeSortCategory("stock"))}>stock</button>
                    <button type="button" onClick={() => this.props.dispatch(changeSortCategory("price"))}>price</button>
                </div>

                <section className="inventory">
                    <MediaQuery minWidth={550}>
                        <BookLineList bookList={bookList} />
                    </MediaQuery>
                    <MediaQuery maxWidth={549}>
                        <BookBlockList bookList={bookList} />
                    </MediaQuery>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    displayMode: state.inventory.displayMode,
    sortBy: state.inventory.sortBy,
    books: state.inventory.books
});

export default requiresLogin()(connect(mapStateToProps)(InventoryPage));