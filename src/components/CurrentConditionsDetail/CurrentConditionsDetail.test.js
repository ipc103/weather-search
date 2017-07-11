import React from 'react'
import {shallow} from 'enzyme'
import CurrentConditionsDetail from './'

describe('CurrentConditionsDetail', () => {
  describe('without props', () => {
    const wrapper = shallow(<CurrentConditionsDetail />)

    it('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('displays a default error message', () => {
      const {message} = CurrentConditionsDetail.defaultProps.conditions
      expect(wrapper.find('p').text()).toEqual(message)
    })
  })

  describe('without weather conditions', () => {
    it('renders only a message if one is present', () => {
      const wrapper = shallow(<CurrentConditionsDetail conditions={ {message: 'Not found!'} }/>)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with weather conditions', () => {
    const wrapper = shallow(<CurrentConditionsDetail conditions={{city: 'Detroit', temp: '98 degrees F', weather: 'Partly Cloudy'}} />)

    it('displays the weather based on a weather report', () => {
      expect(wrapper.find('h1').text()).toEqual('Current Conditions in Detroit')
    })

    it('displays the temperatue and description', () => {
      expect(wrapper.find('p').text()).toEqual('The weather is Partly Cloudy with a temperature of 98 degrees F')
    })
  })
})
