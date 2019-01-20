import React from 'react';
import { shallow, mount } from 'enzyme';
import { LandingPage } from '../components/landing-page';

describe('<LandingPage />', function() {
    it('Renders without crashing', function() {
        shallow(<LandingPage />);
    });

    it('Has right class', function() {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.hasClass('landing-page-container')).toEqual(true);
    })
});