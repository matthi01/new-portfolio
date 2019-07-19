import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./blog-header.scss"

const BlogHeader = (props) => {

    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "construction-placeholder.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <header className="blog-header">
            <Img
                className="blog-header_image"
                fluid={data.placeholderImage.childImageSharp.fluid} />
        </header>
    )
}

export default BlogHeader
