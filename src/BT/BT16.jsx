import React, { Component } from 'react'

export default class BT16 extends Component {
    constructor(props) {
        super(props);
        this.state = { height: "", weight: "", result: "" };
    }

    whenChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    whenClick = () => {
        let { height, weight } = this.state;
        let bmi = weight / ((height / 100) * (height / 100));
        let result = bmi.toFixed(2);
        this.setState({ result });
    };

    checkBMI = () => {
        let { result } = this.state;
        if (result < 18.5) {
            return "Cân nặng thấp";
        } else if (result >= 18.5 && result < 25) {
            return "Bình thường";
        } else if (result >= 25 && result < 30) {
            return "Thừa cân";
        } else {
            return "Béo phì";
        }
    };

  render() {
      let category = this.checkBMI();
    return (
      <div>
            <input
                type="number"
                name="height"
                placeholder="Chiều cao (cm)"
                value={this.state.height}
                onChange={this.whenChange}
            />
            <input
                type="number"
                name="weight"
                placeholder="Cân nặng (kg)"
                value={this.state.weight}
                onChange={this.whenChange}
            />
            <button onClick={this.whenClick}>Tính BMI</button>
            <p>Kết quả: {this.state.result}</p>
            <p>Phân loại: {category}</p>
      </div>
    )
  }
}
