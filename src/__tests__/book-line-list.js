import React from 'react';
import { shallow, mount } from 'enzyme';
import { BookLineList } from '../components/book-line-list';

describe('<BookLineList />', function() {

    const bookList = [];

    it('Renders without crashing', function() {
        shallow(<BookLineList bookList={bookList} />)
    });

    it('Has unordered list with BookLineList class', function() {
        const wrapper = shallow(<BookLineList bookList={bookList} />);
        expect(wrapper.hasClass('BookLineList')).toEqual(true);
    });
});