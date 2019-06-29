import React from "react"

import "./skill-container.scss"

const skillContainer = (props) => {

    const elSkills = props.skills.map((skill) => {
        return (
                    <p className="skill-container_skill">
                        { skill }
                    </p>
                )
    })

    return (
        <div className="skill-container">
            <h3 className="skill-container_title">
                { props.title }
            </h3>
            { elSkills }
        </div>
    )
}

export default skillContainer