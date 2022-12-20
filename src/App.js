import React, { Component } from 'react'
import Counter from './Components/Counter'
import './index.css'
  export default class App extends Component {
    state = {
      total : 0
    }
    updateTotal = (value) => {
      this.setState(prevState => ({total : prevState.total + value}))
    }

  render() {
    return (
    <div className="App">
     <Counter value={2} updateTotal={this.updateTotal}/>
     <Counter value={3} updateTotal={this.updateTotal}/>
     <Counter value={5} updateTotal={this.updateTotal}/>
     <p>Total : {this.state.total}</p>
    </div>

    )
  }
}
