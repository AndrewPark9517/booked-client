import React from 'react';
import {shallow, mount} from 'enzyme';
import {InventoryFormWeb} from '../components/inventory-form-web';

describe('<InventoryFormWeb />', function() {

    const callBack = jest.fn();

    const book = {
        "title": "Some Book",
        "author": "Some Author",
        "stock": 5,
        "price": 6
    };

    it('Renders without crashing', function() {
        shallow(<InventoryFormWeb handleSubmit={callBack} book={book}/>);
    });
});