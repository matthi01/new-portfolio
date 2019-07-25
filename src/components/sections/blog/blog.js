import React from "react"
import "./blog.scss"
import PostPreview from "./post-preview/post-preview"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import { useStaticQuery, graphql } from "gatsby"

import Block from "../../example-components/block/block"
import Hash from "../../example-components/hash/hash"

const blog = () => {

    const data = useStaticQuery(graphql`
        query BlogQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            title
                            path
                            date(formatString: "MMMM DD, YYYY")
                            excerpt
                        }
                    }
                }
            }
        }
    `)

    const allPosts = data.allMarkdownRemark.edges.map((post, index) => {
        return (
            <PostPreview 
                path={ post.node.frontmatter.path }
                title={ post.node.frontmatter.title }
                excerpt={ post.node.frontmatter.excerpt }
                author={ post.node.frontmatter.author }
                date={ post.node.frontmatter.date }
                key= { index } />
        )
    })

    return (
        <div className="blog" id="blog">
            <SectionGradientHeader />
            <h1>Blog</h1>
            { allPosts }

            <Block />
            <Hash />
        </div>
    )
}

export default blog