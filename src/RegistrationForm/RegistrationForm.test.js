import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegistrationForm from './RegistrationForm';

describe(`RegistrationForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<RegistrationForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegistrationForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
