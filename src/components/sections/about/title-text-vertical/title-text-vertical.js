import React from "react"
import Fade from 'react-reveal/Fade'
import "./title-text-vertical.scss"

const titleTextVertical = (props) => {
    return (
        <Fade bottom>
            <div className="title-text-vertical">
                <h2 className="title-text-vertical_title">
                    { props.title }
                </h2>
                <div className="title-text-vertical_text">
                    { props.text }
                </div>
            </div>
        </Fade>
    )
}

export default titleTextVertical