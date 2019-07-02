import React from "react"
import "./title-text-horizontal.scss"

const titleTextHorizontal = (props) => {
    return (
        <div className="title-text-horizontal">
            <h2 className="title-text-horizontal_title">
                { props.title }
            </h2>
            <div className="title-text-horizontal_text">
                { props.text }
            </div>
        </div>
    )
}

export default titleTextHorizontal