import PropTypes from "prop-types"
import React from "react"
import Avatar from "../ui/avatar/avatar"
import avatarImage from "../../images/avatar.png"
import Particles from "./particles/particles"
import "./header.scss"

const Header = (props) => (
  <header className="header">
    <Particles />
    <div className="header_wrapper">
      <div className="header_wrapper_name">
        <Avatar image={ avatarImage } />
        <h1>{ props.title }</h1>
        <h3>{ props.subtitle }</h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
