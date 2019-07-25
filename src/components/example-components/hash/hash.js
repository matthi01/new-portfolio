import React from "react"
import "./hash.scss"
import sha256 from "js-sha256"

class Hash extends React.Component {
    state={
        data: ""
    }

    onHashChange = async (e) => {
        await this.setState({
            data: e.target.value
        })
        this.setHash()  
    }

    setHash = () => {
        let hash = sha256.create()
        hash.update(this.state.data)

        let hashValue = hash.hex()
        document.getElementById("hash-display-field").innerText = hashValue
    }

    render() {
        return (
            <div className="hash">
                <input
                    className="hash_name"
                    type="text"
                    placeholder="Enter something"
                    onChange={ this.onHashChange }
                    value={ this.state.data } />

                <div className="hash_display">
                    <span id="hash-display-field">Calculated Hash Value</span>
                </div>
            </div>
        )
    } 
}

export default Hash