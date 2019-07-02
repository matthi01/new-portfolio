import React from "react"
import "./warning-banner.scss"

const warningBanner = (props) => {
    return (
        <div className="warning-banner"> 
            { props.title }
        </div>
    )
}

export default warningBanner