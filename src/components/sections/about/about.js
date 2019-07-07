import React from "react"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import TitleTextHorizontal from "./title-text-horizontal/title-text-horizontal"
import TitleTextVertical from "./title-text-vertical/title-text-vertical"
import { useStaticQuery, graphql } from "gatsby"
import "./about.scss"

const about = () => {

    const data = useStaticQuery(graphql`
        query AboutQuery {
            allAboutJson {
                edges {
                    node {
                        about {
                            title
                            horizontal {
                                label
                                text
                            }
                            vertical {
                                label
                                text
                            }
                        }
                    }
                }
            }
        }
    `)

    const horizontalElements = data.allAboutJson.edges[0].node.about.horizontal.map((item) => {
        return (
            <TitleTextHorizontal 
                title={ item.label }
                text={ item.text } 
                key={ item.label }
            />
        )
    })

    const verticalElements = data.allAboutJson.edges[0].node.about.vertical.map((item) => {
        return (
            <TitleTextVertical 
                title={ item.label }
                text={ item.text } 
                key={ item.label }
            />
        )
    })

    return (
        <div className="about" id="about">
            <SectionGradientHeader />
            <h1>{ data.allAboutJson.edges[0].node.about.title }</h1>
            <div className="about_content">
                { horizontalElements }  
                { verticalElements }
            </div>
        </div>
    )
}

export default about