import React from "react"

import "./bullet.scss"

const bullet = (props) => {


    const topDistance = (props.order * props.heightIncrement).toString() + "px"

    return (
        <div className={ props.orientation } style={{ top: topDistance }}>
            <div className="bullet">{ props.title }</div>
        </div>
    )
}

export default bullet