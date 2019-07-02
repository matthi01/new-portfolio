import React from "react"
import ConstructionImage from "../components/ui/responsive-images/construction-image"
import { SocialIcon } from "react-social-icons"
import "../styles/construction-page.scss"

const Construction = () => {
    return (
        <div>
            <ConstructionImage />
            <div style={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            justifyContent: "space-around", 
                            alignItems: "center", 
                            position: "relative", 
                            zIndex: 1, 
                            height: "100vh", 
                            color: "#fff" }} >
                <div className="construction-page" style={{ textAlign: "center" }}>
                    <h1>Sorry!</h1>
                    <h2>New Site</h2>
                    <h2>Coming Soon!</h2>
                </div>
                
                <div style={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "space-around", 
                            alignItems: "center",
                            width: "200px" }} >
                    <SocialIcon url="https://github.com/matthi01" network="github" fgColor="white" />
                    <SocialIcon url="https://ca.linkedin.com/in/matthias-ruhland" network="linkedin" fgColor="white" />
                    <SocialIcon url="https://facebook.com/matthias-ruhland" network="facebook" fgColor="white" />
                </div>
            </div>
        </div>

    )
}

export default Construction