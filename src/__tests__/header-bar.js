import React from 'react';
import { shallow, mount } from 'enzyme';
import { HeaderBar } from '../components/header-bar';

describe('<HeaderBar />', function() {
    it('Renders without crashing', function() {
        shallow(<HeaderBar />);
    });

    it('Renders Add Book Button on Inventory Page', function() {
        const wrapper = shallow(<HeaderBar page="inventory"/>);
        expect(wrapper.containsAllMatchingElements([
            <button>Add Book</button>
        ])).toEqual(true);
    });

    it('Renders Inventory Button on Add Book Page', function() {
        const wrapper = shallow(<HeaderBar page="addBook" />);
        expect(wrapper.containsAllMatchingElements([
            <button>Inventory</button>
        ])).toEqual(true);
    });
});