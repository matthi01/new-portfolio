import React from "react"

import Image from "../components/image"
import { SocialIcon } from 'react-social-icons';


const Construction = () => {
    return (
        <div>
            <Image />
            <div style={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            position: "relative", 
                            zIndex: 1, 
                            height: "100vh", 
                            color: "#fff" }}>
                <h1>Sorry! </h1>
                <h3>I'm currently rebuilding this site!</h3>

                <div style={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "space-around", 
                            alignItems: "center",
                            width: "200px",
                            marginTop: "100px" }}>
                    <SocialIcon url="https://github.com/matthi01" network="github" fgColor="white" />
                    <SocialIcon url="https://ca.linkedin.com/in/matthias-ruhland" network="linkedin" fgColor="white" />
                    <SocialIcon url="https://facebook.com/matthias-ruhland" network="facebook" fgColor="white" />
                </div>
            </div>
        </div>

    )
}

export default Construction