import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Product from './product';
import {MemoryRouter } from 'react-router-dom';



describe(`Product  component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<MemoryRouter><Product/></MemoryRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><Product/></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
