// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  handleChange = () => {
    const random = Math.floor(Math.random() * 101)
    this.setState(prevState => ({
      count: prevState.count + random,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          <p>{count % 2 === 0 ? 'Count is Even' : 'Count is Odd'}</p>
          <button type="button" className="button" onClick={this.handleChange}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
