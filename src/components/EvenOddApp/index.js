// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.getRandomNum()

    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const countText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-cont">
        <div className="count-cont">
          <h1 className="heading"> Count {count}</h1>
          <p className="description"> Count is {countText}</p>
          <button
            className="count-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="end-note">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
