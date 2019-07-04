import React from "react"
import Bullet from "./bullet/bullet"
import "./timeline.scss"

class Timeline extends React.Component {

    constructor(props) {
        super(props)
        this.state = {width: props.height};
    }

    componentWillMount() {
        this.setState({width: window.innerWidth})
    }

    render() {

        let heightIncrement;
        let timelineHeight;
        
        if (this.state.width <= 800) {
            heightIncrement = 300
            timelineHeight = 1200
        } else {
            heightIncrement = 170
            timelineHeight = 850
        }


        const bullets = this.props.bullets.map((el, index) => {
            return <Bullet 
                        title={ el.title } 
                        date={ el.date }
                        description={ el.description }
                        key={ index } 
                        order={ index  } 
                        orientation={ index % 2 === 0 ? "left" : "right" }
                        heightIncrement={ heightIncrement } />
        })
    
        return (
            <div className="timeline">
                <div className="timeline_line" style={{ height: timelineHeight + "px" }}></div>
                { bullets }
            </div>
    
        )
    }
}

export default Timeline