import React from 'react';
import { shallow, mount } from 'enzyme';
import { RegistrationForm } from '../components/registration-form';

describe('<RegistrationForm />', function() {

    const dispatch = jest.fn();
    const handleSubmit = jest.fn();

    it('Renders without crashing', function() {
        shallow(<RegistrationForm dispatch={dispatch} handleSubmit={handleSubmit} />);
    });

    it('Has RegistrationForm class', function() {
        const wrapper = shallow(<RegistrationForm dispatch={dispatch} handleSubmit={handleSubmit} />);
        expect(wrapper.hasClass('RegistrationForm')).toEqual(true);
    })

    it('Has register button', function() {
        const wrapper = shallow(<RegistrationForm dispatch={dispatch} handleSubmit={handleSubmit} />);
        expect(wrapper.containsAllMatchingElements([
            <button>Register</button>
        ]));
    });
});