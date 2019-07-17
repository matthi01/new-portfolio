import React from "react"
import { SocialIcon } from "react-social-icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import "./footer.scss"

const footer = () => {

    const data = useStaticQuery(graphql`
        query {
            footer: file(relativePath: { eq: "footer.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `)

    return (
        <footer className="footer">
            <div className="footer_image">
                <Img className="footer_image" alt="footer" fluid={data.footer.childImageSharp.fluid} />
            </div>
            <div className="footer_content">
                <div className="footer_copyright">
                    ©{new Date().getFullYear()} Matthias Ruhland
                </div>
                <div className="footer_social-media">
                    <SocialIcon target="blank" url="https://github.com/matthi01" network="github" fgColor="white" />
                    <SocialIcon target="blank" url="https://ca.linkedin.com/in/matthias-ruhland" network="linkedin" fgColor="white" />
                    <SocialIcon target="blank" url="https://facebook.com/matthias-ruhland" network="facebook" fgColor="white" />
                    <SocialIcon url="mailto:mruhland01@gmail.com?subject=Inquiry from matthiasruhland.com" network="email" fgColor="white" />
                </div>
            </div>
        </footer>
    )
}

export default footer