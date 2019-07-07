import React from "react"
import "./bottom-notification.scss"

const bottomNotification = (props) => {
    return (
        <a href={ props.link } target="blank">
            <div className="bottom-notification">
                { props.text }
            </div>
        </a>
    )
}

export default bottomNotification