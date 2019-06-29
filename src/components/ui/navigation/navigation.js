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

        const navLinks = (
            <div className="navigation_links">
                <div><Link to="index-final/#history">History</Link></div>
                <div><Link to="index-final/#skills">Skills</Link></div>
                <div><Link to="index-final/#about">About</Link></div>
                <div><Link to="index-final/#projects">Projects</Link></div>
            </div>
        )

        let navigation = (
            <div className="navigation">
                <div className="navigation_toggle" onClick={navigationClickHandler}>
                    <FaBars />
                </div>
            </div>
        )

        if (this.state.navOpen) {
            navigation = (
                <div className="navigation navigation_open">
                    <div className="navigation_toggle" onClick={navigationClickHandler}>
                        <FaTimes />
                    </div>
                    { navLinks }
                </div>
            )
        }

        return (
            navigation 
        )
    }
}

export default Navigation