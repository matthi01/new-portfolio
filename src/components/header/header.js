import PropTypes from "prop-types"
import React from "react"
import Avatar from "../ui/avatar/avatar"
import avatarImage from "../../images/avatar.png"
import Particles from "./particles/particles"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Particles />
    <div className="header_wrapper">
      <div className="header_wrapper_name">
        <Avatar image={ avatarImage } />
        <h1>{ siteTitle }</h1>
        <h3>Developer</h3>
      </div>
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
