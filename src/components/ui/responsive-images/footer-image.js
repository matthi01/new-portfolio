import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const footerImage = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "footer.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

return <Img
            style={{    
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    clipPath: "polygon(50% 13.5%, 100% 0%, 100% 100%, 0 100%, 0 0%)"
                }}
            fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default footerImage
