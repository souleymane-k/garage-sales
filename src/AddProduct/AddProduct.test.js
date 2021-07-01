import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddProduct from './Addproduct';

describe(`AddProduct  component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddProduct  />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddProduct  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
