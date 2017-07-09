import React from 'react'
import {shallow} from 'enzyme'
import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NavBar/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('renders with a brand link', () => {
    const wrapper = shallow(<NavBar brand="Coffee" />)
    expect(wrapper.find('.navbar-brand').text()).toEqual('Coffee')
  })
})
