import React from "react"
import { Link } from "gatsby"

import "./navigation.scss"
import { FaBars, FaTimes } from 'react-icons/fa';

class Navigation extends React.Component {

    state = {
        navOpen: false
    }

    render() {

        const navigationClickHandler = () => {
            this.setState((prevState) => ({
                navOpen: !prevState.navOpen
            }))
        }

        return (
            <div className={ this.state.navOpen ? "navigation navigation_open" : "navigation navigation" }>
                <div className="navigation_toggle" onClick={navigationClickHandler}>
                    { this.state.navOpen ? <FaTimes /> : <FaBars /> }
                </div>
                <div className={ this.state.navOpen ? "navigation_links navigation_links_show" : "navigation_links navigation_links_hide" }>
                    <div><Link to="index-final/#history">History</Link></div>
                    <div><Link to="index-final/#skills">Skills</Link></div>
                    <div><Link to="index-final/#about">About</Link></div>
                    <div><Link to="index-final/#projects">Projects</Link></div>
                </div>
            </div> 
        )
    }
}

export default Navigation