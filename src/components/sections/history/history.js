import React from "react"
import Timeline from "./timeline/timeline"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import { useStaticQuery, graphql } from "gatsby"
import "./history.scss"

const history = () => {

    const data = useStaticQuery(graphql`
        query HistoryQuery {
            allHistoryJson {
                edges {
                    node {
                        history {
                            title
                            bullets {
                                label
                                date
                                description
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="history" id="history">
            <SectionGradientHeader />
            <h1>{ data.allHistoryJson.edges[0].node.history.title }</h1>
            <Timeline bullets={ data.allHistoryJson.edges[0].node.history.bullets } />
        </div>
    )
}

export default history