import React from "react"
import Fade from 'react-reveal/Fade'
import "./title-text-horizontal.scss"

const titleTextHorizontal = (props) => {
    return (
        <Fade bottom>
            <div className="title-text-horizontal">
                <h2 className="title-text-horizontal_title">
                    { props.title }
                </h2>
                <div className="title-text-horizontal_text">
                    { props.text }
                </div>
            </div>
        </Fade>
    )
}

export default titleTextHorizontal