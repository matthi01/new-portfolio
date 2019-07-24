import React from "react"
import { graphql } from "gatsby"
import "./blog-template.scss"
import Layout from "../components/layout"
import BlogHeader from "../components/header/blog-header/blog-header"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <BlogHeader />
            <div className="blog-post_container">
                <div className="blog-post">
                    <h4>{frontmatter.date}</h4>
                    <h3>Written by: {frontmatter.author}</h3>
                    <div
                        className="blog-post_content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                author
            }
        }
    }
`