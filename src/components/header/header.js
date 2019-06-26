import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header_name-container">
      <h1 className="header_name-container_name">{siteTitle}</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
