import React, { Component } from 'react'

export default class BT9 extends Component {
    constructor() {
        super();
        this.state = {
            text: "This is red color",
            color: "red",
        }
        this.changeColor = () => {
            this.setState({
                text: "This is black color",
                color: "black",
            })
        }
    }
    render() {
        return (
            <>
                <div style={{ color: this.state.color }}>{this.state.text}</div>
                <button onClick={this.changeColor}>Đổi màu </button>
            </>
        )
    }
}
