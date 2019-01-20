import React from 'react';

import {shallow, mount} from 'enzyme';

import { AddBookPage } from '../components/add-book-page';

describe('<AddBookPage />', function() {
    it('Renders without crashing', function() {
        shallow(<AddBookPage />);
    });

    it('Add Book Form is present', function() {
        const wrapper = shallow(<AddBookPage />);
        expect(wrapper.containsAllMatchingElements([
            <h2>Add a book of your choice!</h2>])).toEqual(true);
    });
});