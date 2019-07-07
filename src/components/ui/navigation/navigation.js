import React from "react"
import { Link } from "gatsby"

import "./navigation.scss"
import { FaBars, FaTimes } from 'react-icons/fa';
import { StaticQuery, graphql } from "gatsby"

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

        const navigationItems = this.props.data.allNavigationJson.edges[0].node.navigation.map((item) => {
            return (
                <div key={ item.link }>
                    <Link to={ item.link }>{ item.label }</Link>
                </div>
            )
        })

        return (
            <div className={ this.state.navOpen ? "navigation navigation_open" : "navigation navigation" }>
                <div className="navigation_toggle" onClick={navigationClickHandler}>
                    { this.state.navOpen ? <FaTimes /> : <FaBars /> }
                </div>
                <div className={ this.state.navOpen ? "navigation_links navigation_links_show" : "navigation_links navigation_links_hide" }>
                    { navigationItems }
                </div>
            </div> 
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query NavigationQuery {
                allNavigationJson {
                    edges {
                        node {
                            navigation {
                                label
                                link
                            }
                        }
                    }
                }
            }
        `}
        render={ data => <Navigation data={data} {... props} /> }
    />
)