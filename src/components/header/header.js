import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../ui/avatar/avatar"
import avatarImage from "../../images/avatar.png"
import Particles from "./particles/particles"
import "./header.scss"

const Header = (props) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          subtitle
        }
      }
    }
  `)

  return (
    <header className="header">
      <Particles />
      <div className="header_wrapper">
        <div className="header_wrapper_name">
          <Avatar image={ avatarImage } />
          <h1>{ data.site.siteMetadata.title }</h1>
          <h3>{ data.site.siteMetadata.subtitle }</h3>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
