import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginForm } from '../components/login-form';

describe('<LoginForm />', function() {

    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    it('Renders without crashing', function() {
        shallow(<LoginForm handleSubmit={handleSubmit} dispatch={dispatch}/>);
    });

    it('Has Login button', function() {
        const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} dispatch={dispatch}/>);
        expect(wrapper.containsAllMatchingElements([
            <button>Login</button>
        ]));
    });
});