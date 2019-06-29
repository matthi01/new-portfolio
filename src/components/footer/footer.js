import React from "react"

import "./footer.scss"

const footer = () => {
    return (
        <footer className="footer">
            ©{new Date().getFullYear()} Matthias Ruhland
        </footer>
    )
}

export default footer