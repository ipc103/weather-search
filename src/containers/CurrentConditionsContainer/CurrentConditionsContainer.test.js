import React from 'react'
import {shallow, mount} from 'enzyme'
import CurrentConditionsContainer from './'

jest.mock('../../api/weatherUnderground')

describe('CurrentConditionsContainer', () => {
  const wrapper = shallow(<CurrentConditionsContainer/>)

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('searching for a city and region', () => {

    describe('with valid city and region', () => {
      beforeEach(() => {
        wrapper.setState({city: 'Pittsburgh', region: 'PA'})
        const event = new Event('submit')
        wrapper.instance().handleSearch(event)
      })

      it('updates the state with current conditions',() => {
        const expected = {
          city: '',
          region: '',
          conditions: {
            weather: 'partly cloudy',
            temp: '76.6 F (24.8 C)',
            city: `Pittsburgh, PA`
          }
        }
        expect(wrapper.state()).toEqual(expected)
      })
    })

    describe('with an invalid city and region', () => {
      beforeEach(() => {
        wrapper.setState({city: 'Pit', region: 'Pennsy'})
        const event = new Event('submit')
        wrapper.instance().handleSearch(event)
      })

      it('stores an error message in the conditions', () => {
        const expected = {
          city: 'Pit',
          region: 'Pennsy',
          conditions: {
            message: 'No results found'
          }
        }
        expect(wrapper.state()).toEqual(expected)
      })
    })
  })
})
