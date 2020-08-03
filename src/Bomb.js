import React, { Component } from 'react'


export default class Bomb extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             secondsLeft: this.props.initialCount
        }
    }
    
    render() {
        
        if (this.state.secondsLeft !== 0){
            return (
                <div>
                    {/* {this.state.secondsLeft !== 0 ? {this.state.secondsLeft} seconds left before i go boom!} */}
                   { this.state.secondsLeft } seconds left before I go boom!
                </div>
            )
        }
        else {
            return (
                <div>
                   Boom!
                </div>
            )
        }
    }
}
