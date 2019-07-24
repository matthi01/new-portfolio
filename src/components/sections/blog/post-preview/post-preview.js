import React from "react"
import "./post-preview.scss"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'

const postPreview = (props) => {
    return (
        <Fade bottom>
            <Link to={ props.path } style={{ textDecoration: "none" }}>
                <div className="post-preview">
                    <div className="post-preview_title">{ props.title }</div>
                    <div className="post-preview_text">{ props.excerpt }</div>
                    <div className="post-preview_meta">
                        <div className="post-preview_meta_author">{ props.author }</div>
                        <div>|</div>
                        <div className="post-preview_meta_date">{ props.date }</div>
                    </div>
                </div>
            </Link>
        </Fade>
    )
}

export default postPreview