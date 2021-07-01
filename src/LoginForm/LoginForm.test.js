import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import toJson from 'enzyme-to-json'
import LoginForm from './LoginForm';

describe(`LoginForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<LoginForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

