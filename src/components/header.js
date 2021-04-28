import React from "react"
import { Link } from "gatsby"

const Header = ({setMenuState, location, setCursorHovered}) => {

  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link activeClassName="active" to="/">
            Pocket.
          </Link>
          <div className="hamburger-menu" onClick={() => setMenuState(true)} onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
