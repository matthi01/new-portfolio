import React from "react"
import "./title-text-vertical.scss"

const titleTextVertical = (props) => {
    return (
        <div className="title-text-vertical">
            <h2 className="title-text-vertical_title">
                { props.title }
            </h2>
            <div className="title-text-vertical_text">
                { props.text }
            </div>
        </div>
    )
}

export default titleTextVertical