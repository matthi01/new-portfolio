import React from "react"
import "./avatar.scss"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"

const avatar = (props) => {

    const data = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "avatar.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `)

    return (
        <Img className="avatar" alt="avatar" fluid={data.avatar.childImageSharp.fluid} />
    )
}

export default avatar