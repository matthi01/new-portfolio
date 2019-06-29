import React from "react"

import "./bullet.scss"

const bullet = (props) => {


    const topDistance = (props.order * props.heightIncrement).toString() + "px"

    return (
        <div className={ props.orientation } style={{ top: topDistance }}>
            <div className="bullet">
                <h3>{ props.title }</h3>
                <p>{ props.date }</p>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

export default bullet