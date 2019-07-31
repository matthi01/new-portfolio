import React from "react"
import "./hash.scss"
import sha256 from "js-sha256"

class Hash extends React.Component {
    state={
        data: "",
        output: "Calculated Hash Value"
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
        this.setState({
            output: hashValue
        })
    }

    render() {
        return (
            <span className="hash">
                <input
                    className="hash_name"
                    type="text"
                    placeholder="Enter something"
                    onChange={ this.onHashChange }
                    value={ this.state.data } />

                <span className="hash_display">
                    { this.state.output }
                </span>
            </span>
        )
    } 
}

export default Hash