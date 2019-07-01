import React from "react"

import { SocialIcon } from "react-social-icons"
import "./footer.scss"

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer_image"></div>
            <div className="footer_content">
                <div className="footer_copyright">
                    ©{new Date().getFullYear()} Matthias Ruhland
                </div>
                <div className="footer_social-media">
                    <SocialIcon url="https://github.com/matthi01" network="github" fgColor="white" />
                    <SocialIcon url="https://ca.linkedin.com/in/matthias-ruhland" network="linkedin" fgColor="white" />
                    <SocialIcon url="https://facebook.com/matthias-ruhland" network="facebook" fgColor="white" />
                </div>
            </div>
        </footer>
    )
}

export default footer