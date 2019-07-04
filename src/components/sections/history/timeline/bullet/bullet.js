import React from "react"
import Fade from 'react-reveal/Fade';
import "./bullet.scss"

const bullet = (props) => {

    const topDistance = (props.order * props.heightIncrement).toString() + "px"
    let connectorLine = <div className="bullet_connector bullet_connector-right"></div>
    
    if ( props.orientation === "right" ) {
        connectorLine = <div className="bullet_connector bullet_connector-left"></div>
    }

    return (
        <Fade bottom>
            <div className={ props.orientation } style={{ top: topDistance }}>
                <div className="bullet">
                    <h3>{ props.title }</h3>
                    <p>{ props.date }</p>
                    <p>{ props.description }</p>
                </div>
                { connectorLine }
            </div>
        </Fade>
    )
}

export default bullet