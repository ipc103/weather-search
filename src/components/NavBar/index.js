import React from 'react'

const NavBar = ({brand}) => {
  return (
    <nav className="navbar navbar-default">
      <div className='navbar-header'>
        <a className="navbar-brand">{brand}</a>
      </div>
    </nav>
  )
}

export default NavBar
