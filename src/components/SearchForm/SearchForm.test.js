import React from 'react'
import {shallow} from 'enzyme'
import SearchForm from './'

describe('SearchForm', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls the handleChange prop on city change', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(<SearchForm handleChange={handleChange} />)
    wrapper.find('[name="city"]').simulate('change', 'Pittsburgh')
    expect(handleChange).toBeCalled()
  })

  it('calls the handleChange prop on state change', ()=>{
    const handleChange = jest.fn()
    const wrapper = shallow(<SearchForm handleChange={handleChange} />)
    wrapper.find('[name="region"]').simulate('change', 'PA')
    expect(handleChange).toBeCalled()
  })

  it('calls the handleSubmit prop on form submission', () => {
    const handleSubmit = jest.fn()
    const wrapper = shallow(<SearchForm handleSubmit={handleSubmit} />)
    wrapper.find('form').simulate('submit')
    expect(handleSubmit).toBeCalled()
  })
})
