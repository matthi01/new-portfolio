import React from "react"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import TitleTextHorizontal from "./title-text-horizontal/title-text-horizontal"
import TitleTextVertical from "./title-text-vertical/title-text-vertical"
import { StaticQuery, graphql } from "gatsby"
import "./about.scss"

const about = (data) => {

    const horizontalElements = data.data.allDataJson.edges[1].node.about.horizontal.map((item) => {
        return (
            <TitleTextHorizontal 
                title={ item.title }
                text={ item.text } 
                key={ item.title }
            />
        )
    })

    const verticalElements = data.data.allDataJson.edges[1].node.about.vertical.map((item) => {
        return (
            <TitleTextVertical 
                title={ item.title }
                text={ item.text } 
                key={ item.title }
            />
        )
    })

    return (
        <div className="about" id="about">
            <SectionGradientHeader />
            <h1>About Me</h1>
            <div className="about_content">
                { horizontalElements }  
                { verticalElements }
            </div>
        </div>
    )
}

const About = about

export default props => (
    <StaticQuery
        query={graphql`
        query AllContentQuery {
            allDataJson {
                edges {
                    node {
                        about {
                            horizontal {
                                title
                                text
                            }
                            vertical {
                                title
                                text
                            }
                        }
                    }
                }
            }
        }`}
        render={ data => <About data={data} {...props} /> }
    />
);