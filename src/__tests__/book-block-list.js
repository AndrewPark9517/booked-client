import React from 'react';
import { shallow, mount } from 'enzyme';
import { BookBlockList } from '../components/book-block-list';

describe('<BookBlockList />', function() {

    it('Renders without crashing', function() {
        const bookList = [];
        shallow(<BookBlockList bookList={bookList}/>);
    });

    it('Has unordered list', function() {
        const bookList = [{
            "title": "Some Book",
            "author": "Some Author",
            "stock": 5,
            "price": 6
        }];
        const wrapper = shallow(<BookBlockList bookList={bookList}/>);
        expect(wrapper.hasClass('book-block-list')).toEqual(true);
    });
});