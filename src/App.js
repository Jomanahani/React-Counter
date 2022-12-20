import React, { Component } from 'react'
import Counter from './Components/Counter'
import './index.css'
  
  export default class App extends Component {
    
    state = {
      total : 0
    }
    getTotal = (num) => {
      this.setState(prevState => ({total : prevState.total + num}))
    }
  render() {
    return (
    <div className="App">
     <Counter num={3} getTotal={this.getTotal}/>
     <Counter num={3} getTotal={this.getTotal}/>
     <Counter num={3} getTotal={this.getTotal}/>
    </div>

    )
  }
}
