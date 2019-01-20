import React from 'react';
import {shallow, mount} from 'enzyme';
import { InventoryAddBookForm } from '../components/inventory-add-book-form';

describe('<InventoryAddBookForm', function() {

    const callBack = jest.fn();

    it('Renders without crashing', function() {
        shallow(<InventoryAddBookForm handleSubmit={callBack} />);
    });

    it('Has InventoryAddBookForm Class', function() {
        const wrapper = shallow(<InventoryAddBookForm handleSubmit={callBack} />);
        expect(wrapper.hasClass('InventoryAddBookForm')).toEqual(true);
    });

    it('Has submit button', function() {
        const wrapper = shallow(<InventoryAddBookForm handleSubmit={callBack} />);
        expect(wrapper.containsAllMatchingElements([
            <button>Submit</button>
        ])).toEqual(true);
    });
});