import React from 'react';
import { App } from '../components/app';
import { shallow, mount } from 'enzyme';

describe('<App />', function() {

    it('Renders without crashing', function() {
        shallow(<App />)
    });

});