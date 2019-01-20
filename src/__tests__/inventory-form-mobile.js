import React from 'react';
import {shallow, mount } from 'enzyme';
import InventoryFormMobile from '../components/inventory-form-mobile';

describe('<InventoryFormMobile />', function() {

    const callBack = jest.fn();

    const book = {
        "title": "Some Book",
        "author": "Some Author",
        "stock": 5,
        "price": 6
    };

    it('Renders without crashing', function() {
        shallow(<InventoryFormMobile handleSubmit={callBack} book={book}/>);
    });
});