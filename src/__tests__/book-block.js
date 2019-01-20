import React from 'react';
import { shallow, mount } from 'enzyme';
import { BookBlock } from '../components/book-block';

describe('<BookBlock />', function() {

    const book = {
        "title": "Some Book",
        "author": "Some Author",
        "stock": 5,
        "price": 6
    }

    it('Renders without crashing', function() {
        shallow(<BookBlock book={book}/>)
    });

    it('Has Book Block class', function() {
        const wrapper = shallow(<BookBlock book={book} />)
        expect(wrapper.hasClass('BookBlock')).toEqual(true);
    });

    it('Has all book info', function() {
        const wrapper = shallow(<BookBlock book={book} />)   
        expect(wrapper.containsAllMatchingElements([
            <span>{book.title}</span>,
            <span>{book.author}</span>,
            <span>Stock: {book.stock}</span>,
            <span>Price: ${book.price}</span>
        ])).toEqual(true);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    });
});