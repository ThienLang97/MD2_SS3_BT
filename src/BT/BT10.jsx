import React, { Component } from 'react'

export default class BT10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            outputText: ""
        };
    }

    whenChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    whenClick = () => {
        this.setState({ outputText: this.state.inputText });
    };
    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.whenChange}
                />
                <button onClick={this.whenClick}>Hiển thị</button>
                <p>{this.state.outputText}</p>
            </>
        )
    }
}
