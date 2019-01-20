import React from 'react';
import { shallow, mount } from 'enzyme';
import { BookLine } from '../components/book-line';

describe('<BookLine />', function() {

    const book = {
        "title": "Some Book",
        "author": "Some Author",
        "stock": 5,
        "price": 6
    }

    it('Renders without crashing', function() {
        shallow(<BookLine book={book}/>);
    });

    it('Has all book info', function() {
        const wrapper = shallow(<BookLine book={book} />);
        expect(wrapper.containsAllMatchingElements([
            <div>{book.title}</div>,
            <div>{book.author}</div>,
            <div>{book.stock}</div>,
            <div>{book.price}</div>
        ])).toEqual(true);
    });
});