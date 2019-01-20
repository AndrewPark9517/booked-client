import React from 'react';
import { shallow, mount } from 'enzyme';
import {InventoryPage} from '../components/inventory-page';

describe('<InventoryPage />', function() {

    const callBack = jest.fn();

    it('Renders without crashing', function() {
        shallow(<InventoryPage dispatch={callBack} />);
    });

    it('Has InventorPage Class', function() {
        const wrapper = shallow(<InventoryPage dispatch={callBack} />);
        expect(wrapper.hasClass('InventoryPage')).toEqual(true);
    });

    it('Has sort buttons', function() {
        const wrapper = shallow(<InventoryPage dispatch={callBack} />);
        expect(wrapper.containsAllMatchingElements([
            <button>title</button>,
            <button>author</button>,
            <button>stock</button>,
            <button>price</button>
        ])).toEqual(true);
    });
});