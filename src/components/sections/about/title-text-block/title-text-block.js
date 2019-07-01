import React from "react"

import "./title-text-block.scss"

const titleTextBlock = (props) => {
    return (
        <div className="title-text-block">
            <h2 className="title-text-block_title">
                { props.title }
            </h2>
            <div className="title-text-block_text">
                { props.text }
            </div>
        </div>
    )
}

export default titleTextBlock