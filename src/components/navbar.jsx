import React from 'react'
//import PropTypes from 'prop-types'

class NavBar extends React.Component {
  render () {
    return(
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#"><span className="badge badge-pill badge-secondary">Total: {this.props.totalCount}</span></a>
      </nav>
    )

  }
}

export default NavBar;
