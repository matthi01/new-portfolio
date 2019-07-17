/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Header from "./header/header"
import Footer from "./footer/footer"
import Navigation from "./ui/navigation/navigation"
import "./layout.css"
import "./layout-override.scss"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
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
    <div>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Helmet>
      <div
        style={{
          width:'100%'
        }}
      >
        <Navigation />
        <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
