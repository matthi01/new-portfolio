import React from "react"
import Bullet from "./bullet/bullet"
import "./timeline.scss"

const timeline = (props) => {

    let timelineHeight = 850
    let heightIncrement;

    if (window.innerWidth <= 800) {
        heightIncrement = 300
        timelineHeight = 1200
    } else {
        heightIncrement = 170
        timelineHeight = 850
    }

    const bullets = props.bullets.map((el, index) => {
        return <Bullet 
                    title={ el.title } 
                    date={ el.date }
                    description={ el.description }
                    key={ index } 
                    order={ index  } 
                    orientation={ index % 2 === 0 ? "left" : "right" }
                    heightIncrement={ heightIncrement } />
    })

    return (
        <div className="timeline">
            <div className="timeline_line" style={{ height: timelineHeight + "px" }}></div>
            { bullets }
        </div>

    )
}

export default timeline