import React from 'react'
import App from './components/App.jsx';
import { shallow, mount, render } from 'enzyme';



test('expects App to have state listingInfo', () => {
    const wrapper = mount(<App/>)
    expect(wrapper).toHaveState('listingInfo');
});

