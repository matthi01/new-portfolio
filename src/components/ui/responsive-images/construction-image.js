import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const constructionImage = () => {
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

  return <Img
              style={{    
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%" 
                    }}
              fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default constructionImage
