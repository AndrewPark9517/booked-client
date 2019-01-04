import React from 'react';
import {connect} from 'react-redux';
//import {Link, Redirect} from 'react-router-dom';
import BookBlockList from './book-block-list';
import BookLineList from './book-line-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/inventory-page.css';
import { changeDisplayToBlock, changeDisplayToLine } from '../actions/inventory';

export class InventoryPage extends React.Component {

    displayBlock() {
        this.props.dispatch(changeDisplayToBlock());
    }

    displayLine() {
        this.props.dispatch(changeDisplayToLine());
    }

    render() {
        const bookList = [
            {
                title: "Harry Potter 1",
                author: "JK Rowling",
                price: 10
            },
            {
                title: "Crime and Punishment",
                author: "Dostoevsky",
                price: 11
            },
            {
                title: "12 Rules for Life",
                author: "Jordan Peterson",
                price: 12
            }
        ];

        let list; 
        console.log('display mode: ',this.props.displayMode);
        if(this.props.displayMode === "block") {
            list = <BookBlockList bookList={bookList} />;
        }
        else {
            list = <BookLineList bookList={bookList} />;
        }

        return (
            <div className='InventoryPage'>
                <div className="tempHeaderBar">
                    <button onClick={() => this.displayBlock()}><FontAwesomeIcon className="displayModeButton" icon="pause" /></button>
                    <button onClick={() => this.displayLine()}><FontAwesomeIcon className="displayModeButton" icon="list" /></button>
                </div>
                <section className="stock">
                    {list}
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    displayMode: state.inventory.displayMode
});

export default connect(mapStateToProps)(InventoryPage);