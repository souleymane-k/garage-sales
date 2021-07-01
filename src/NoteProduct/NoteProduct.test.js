import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NoteProduct from './NoteProduct';
import {MemoryRouter} from 'react-router-dom'

describe(`NoteProduct component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<MemoryRouter><NoteProduct /></MemoryRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><NoteProduct /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})