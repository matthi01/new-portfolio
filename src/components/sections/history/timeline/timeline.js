import React from "react"

import Bullet from "./bullet/bullet"

import "./timeline.scss"

const timeline = (props) => {

    const timelineHeight = 500

    const bullets = props.bullets.map((el, index) => {
        return <Bullet 
                    title={ el.title } 
                    key={ index } 
                    order={ index + 1 } 
                    orientation={ index % 2 === 0 ? "left" : "right" }
                    heightIncrement={ timelineHeight / (props.bullets.length + 2) } />
    })

    return (
        <div className="timeline">
            <div className="timeline_line" style={{ height: timelineHeight + "px" }}></div>
            { bullets }
        </div>

    )
}

export default timeline