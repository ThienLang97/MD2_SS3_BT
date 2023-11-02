import React, { Component } from 'react'

export default class BT13 extends Component {
    constructor() {
        super();
        this.state = {
            status: true
        }
        this.hideBtn = () => {
            this.setState({
                status: !this.state.status
            })
        }
    }
  render() {
    return (
      <>
            {this.state.status ? <>
                <p>Đoạn văn này đang được hiện</p>
            </> : <>Đoạn văn đó đã bị ẩn nhưng tôi để chữ</>}
            <button onClick={this.hideBtn}>{this.state.status ? <div>Hide</div> : <div>Show</div>}</button>
      </>
    )
  }
}
