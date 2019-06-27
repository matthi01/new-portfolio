import React from "react"

import Bullet from "./bullet/bullet"

import "./timeline.scss"

const timeline = (props) => {

    const bullets = props.bullets.map((el) => {
        return <Bullet title={ el.title } key={ el.title }/>
    })

    return (
        <div>
            <div className="timeline"></div>
            { bullets }
        </div>

    )
}

export default timeline