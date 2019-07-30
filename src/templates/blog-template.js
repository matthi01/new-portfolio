import React from "react"
import { graphql } from "gatsby"
import "./blog-template.scss"
import Layout from "../components/layout"
import BlogHeader from "../components/header/blog-header/blog-header"

import rehypeReact from "rehype-react"
import HashComponent from "../components/blog-components/hash/hash"
import BlockComponent from "../components/blog-components/block/block"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter, htmlAst } = markdownRemark

    const renderAst = new rehypeReact({
        createElement: React.createElement,
        components: 
            { 
                "hash-component": HashComponent, 
                "block-component": BlockComponent 
            }, 
    }).Compiler

    return (
        <Layout>
            <BlogHeader />
            <div className="blog-post_container">
                <div className="blog-post">
                    <h4>{frontmatter.date}</h4>
                    <h3>Written by: {frontmatter.author}</h3>
                    <div>{ renderAst(htmlAst) }</div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
        htmlAst 
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                author
            }
        }
    }
`