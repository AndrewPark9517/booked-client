import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../components/input';

describe('<Input />', function() {

    const meta = {
        touched: false,
        error: ''
    }

    const input = {
        name: 'name'
    }

    const placeholder = '';
    const type = '';

    it('Renders without crashing', function() {
        shallow(<Input meta={meta} input={input} placeholder = {placeholder} type={type} />);
    });

    it('Has input class', function() {
        const wrapper = shallow(<Input meta={meta} input={input} placeholder = {placeholder} type={type}/>);
        expect(wrapper.hasClass('Input')).toEqual(true);
    });
});