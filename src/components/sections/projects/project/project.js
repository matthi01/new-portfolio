import React from "react"

import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import Image from "../../../image"
import "./project.scss"

class Project extends React.Component {

    state = {
        drawerOpen: false
    }

    render () {
        const drawerClickHandler = () => {
            this.setState((prevState) => ({
                drawerOpen: !prevState.drawerOpen
            }))
        }

        return (
            <div className="project">
            <div className="project_image">
                <a href={ this.props.link } target="blank">
                    <Image className="project_image_img" />
                </a>
            </div>
            <div className={ this.state.drawerOpen ? "project_drawer project_drawer_open" : "project_drawer project_drawer_closed" } onClick={ drawerClickHandler }>
                <div className="project_drawer_description">{ this.props.description }</div>
                <div className="project_drawer_icon">
                    { this.state.drawerOpen ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown /> }
                </div>
            </div>
        </div>
        )
    }
}

export default Project