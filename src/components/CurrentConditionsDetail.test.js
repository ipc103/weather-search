import React from 'react'
import {shallow} from 'enzyme'
import CurrentConditionsDetail from './CurrentConditionsDetail'

describe('CurrentConditionsDetail', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CurrentConditionsDetail conditions={ {} }/>)
    expect(wrapper).toMatchSnapshot()
  });
})
