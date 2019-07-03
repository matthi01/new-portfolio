import React from "react"
import "./skill-container.scss"

const skillContainer = (props) => {

    const elSkills = props.skills.map((skill, index) => {
        return (
                    <p className="skill-container_skill" key={ index }>
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