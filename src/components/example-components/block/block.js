import React from "react"
import "./block.scss"
import sha256 from "js-sha256"

class Block extends React.Component {
    state = {
        data: "",
        difficulty: 3,
        nonce: 0,
        mined: false,
        touched: false,
        hash: ""
    }

    onDataChange = (e) => {
        this.setState({
            data: e.target.value,
            touched: true,
            mined: false
        })
    }

    fieldChange = () => {
        this.setState({
            mined: false,
            touched: true
        })
    }

    onMineClickHandler = () => {
        let currNonce = this.state.nonce
        let index = 0
        let mined = this.state.mined

        while (!mined && index < 10000) {
            mined = this.hashBlock(currNonce)
            if (!mined) {
                currNonce++
                this.hashBlock(currNonce)
            }
            index++
        }
    }

    hashBlock = (nonce) => {
        let hash = sha256.create()
        hash.update(this.state.data.toString())
        hash.update(nonce.toString())

        let hashValue = hash.hex()
        let difficulty = this.state.difficulty

        if (hashValue.substr(0, difficulty) === "0".repeat(difficulty)) {
            this.setState({
                mined: true,
                hash: hashValue,
                nonce: nonce,
                touched: false
            })
            return true
        }
        return false
    }

    render() {
        return (
            <div className={this.state.mined ? "block mined" : "block"} >
                <label >Data</label>
                <input 
                    id="block_data" 
                    type="text" placeholder="Data" 
                    onChange={ this.onDataChange } 
                    value={ this.state.data } />
    
                <label>Nonce</label>
                <input 
                    id="block_nonce" 
                    type="text" 
                    placeholder="Nonce"
                    onChange={ this.fieldChange }
                    value={ this.state.nonce } />
    
                <label >Block Hash</label>
                <input 
                    id="block_hash" 
                    type="text" 
                    placeholder="Block Hash" 
                    onChange={ this.fieldChange }
                    value={ this.state.hash } />
    
                <button onClick={ this.onMineClickHandler }>Mine</button>
            </div>
        )
    }
}

export default Block