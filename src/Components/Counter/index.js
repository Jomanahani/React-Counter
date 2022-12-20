import React, { Component } from 'react'
import './style.css'

export default class Counter extends Component {

    state={
        counter : 0,
        value :this.props.value,
    }

    increment =() =>{
        this.setState(prevState=>({counter : prevState.counter + parseInt(this.state.value)}))
        this.props.getTotal(this.state.value)
    }

    decrement = ()=>{
        if(this.state.counter > 0){
        this.setState(prevState=>({counter: prevState.counter - parseInt(this.state.value)}))
        this.props.getTotal(-this.state.value)
        }
    }
  render() {
    return (
      <div className='counter'>
        <p>{this.state.counter}</p>
        <button onClick={this.decrement} className='decrement' >-</button>
        <button onClick={this.increment} className='increment' >+</button>
      </div>
    )
  }
}
