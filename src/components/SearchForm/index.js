import React from 'react'

const SearchForm = ({city, state, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} >
      <div className='form-group'>
        <label>City</label>
        <input type='text' name='city' value={city} onChange={handleChange} className='form-control'/>
      </div>
      <div className='form-group'>
        <label>State</label>
        <input type='text' name='st' value={state} onChange={handleChange} className='form-control'/>
      </div>
      <input type='submit' value="Search" />
    </form>
  )
}

export default SearchForm
