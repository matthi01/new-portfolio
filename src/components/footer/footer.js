import React from "react"

import "./footer.scss"

const footer = () => {
    return (
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    )
}

export default footer